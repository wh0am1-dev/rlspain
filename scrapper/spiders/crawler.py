#!/usr/bin/env python3
# -*- coding: utf-8 -*-

import json
import scrapy
from scrapy.http import Request

class RLScrapper(scrapy.Spider):
    name = 'rlscrapper'
    base_url = 'https://rocketleague.tracker.network/profile/mmr/steam/'

    @staticmethod
    def load_json():
        data = None
        with open('data/data.json') as f:
            data = json.load(f)
        return data

    def start_requests(self):
        data = self.load_json()
        if not data:
            return []

        urls = [data[user]['id'] for user in data]
        for i, v in enumerate(urls):
            urls[i] = self.base_url + str(urls[i])

        return [Request(url) for url in urls]

    def parse(self, response):
        for mmr in response.css('a[data-id="13 > span"]'):
            yield {'mmr': mmr.extract()}

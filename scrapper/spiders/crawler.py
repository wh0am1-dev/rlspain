#!/usr/bin/env python3
# -*- coding: utf-8 -*-

import json
import scrapy
from scrapy.http import Request

class RLScrapper(scrapy.Spider):
    name = 'rlscrapper'
    base_url = 'https://rocketleague.tracker.network/profile/mmr/steam/'
    start_urls = []

    def __init__(self, category=None, *args, **kwargs):
        super(RLScrapper, self).__init__(*args, **kwargs)

        data = self.load_json()
        if not data:
            return []

        urls = [data[user]['id'] for user in data]
        for i, v in enumerate(urls):
            urls[i] = self.base_url + str(urls[i])
        self.start_urls = urls

    @staticmethod
    def load_json():
        data = None
        with open('data/data.json') as f:
            data = json.load(f)
        return data

    def parse(self, response):
        yield {'mmr': response.css('a[data-id="13"] > span ::text').extract_first()}

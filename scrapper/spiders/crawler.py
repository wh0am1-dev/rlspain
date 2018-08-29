#!/usr/bin/env python3
# -*- coding: utf-8 -*-

import json
import scrapy
from scrapy import signals
from scrapy.http import Request

class RLSpider(scrapy.Spider):
    name = 'rlspider'
    start_urls = []
    data = None
    items = []
    base_url = {
        'steam': 'https://rocketleague.tracker.network/profile/mmr/steam/',
        'ps': 'https://rocketleague.tracker.network/profile/mmr/ps/',
    }

    def __init__(self, category=None, *args, **kwargs):
        super(RLSpider, self).__init__(*args, **kwargs)

        self.data = self.load_json()
        if not self.data:
            return []

        for user in self.data:
            platform = 'ps' if self.data[user]['ps'] else 'steam'
            self.start_urls.append(self.base_url[platform] + str(self.data[user]['id']))

    @classmethod
    def from_crawler(cls, crawler, *args, **kwargs):
        spider = super(RLSpider, cls).from_crawler(crawler, *args, **kwargs)
        crawler.signals.connect(spider.item_scraped, signal=signals.item_scraped)
        crawler.signals.connect(spider.spider_closed, signal=signals.spider_closed)
        return spider

    def item_scraped(self, item, response, spider):
        if item['mmr']:
            item['mmr'] = int(item['mmr'])
        self.items.append(item)
    
    def spider_closed(self, spider, reason):
        from pprint import pprint
        for item in self.items:
            self.data[item['id']]['mmr'] = item['mmr']
        pprint(self.data)

    def parse(self, response):
        url = response.url
        if url[-1:] == '/':
            url = url[:-1]
        url_id = url.split('/')[-1:][0]
        yield {
            'id': url_id,
            'mmr': response.css('a[data-id="13"] > span ::text').extract_first()
        }

    @staticmethod
    def load_json():
        data_ = None
        with open('data/data.json') as f:
            data_ = json.load(f)
        return data_
    
    @staticmethod
    def write_json():
        pass

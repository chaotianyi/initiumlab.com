title: 整日做表沒思路？Google幫你開腦洞
date: 2015-09-30 00:06:19
author: Chao Tianyi
language: zh-hant
tags:
- Tools
---
一個數據分析項目，往往始於摸索一張龐大而陌生的數據表格。嘗試畫些簡易圖表是啟發思路的好辦法，但這絕非易事──想想有多少種圖表：直方圖柱狀圖餅圖折線圖雷達圖……若選取不同的列來分析，每種圖表又有多達幾十種畫法。

Google Sheets 最近推出了一項新功能 Explore，或許能成為探索陌生數據的第一步。Google 介紹稱，Explore 能根據表格內容自動生成盡可能多的圖表，還順帶做些數據分析，挖掘數據的關聯和趨勢[1]。

Explore 的使用方法很簡單，一次點擊就能自動出圖，不時還會附上（它認為）有趣的發現，例如列舉最大值和最小值等。

<!-- more -->

![Demo of google explore sheet](/blog/20150930-google-sheets-explore/explore.gif)

但，作為一個每天使用 Google Sheets 超過8小時的人，面對橫空出世的 Explore，欣喜之餘不免有些懷疑，Explore 真的有這麼神？碰巧 Initium Lab 最近出了香港工資測試遊戲[2]，遊戲使用 2011 年香港人口普查的公開數據[3]，我從中選取了三張表格來測試 Explore 的實用性。

## 1.呈現數據：自動選重點出圖

下圖是一張很常見的表格[4]，要點明確、容易讀懂。Explore 基於表格裏的35項數據自動做出了十張圖，動用了柱狀圖、餅圖、折線圖和堆疊折線圖四種形態。有的圖表下方會出現「一句話總結」，基本都戳中要點。對這種經過預處理的表格而言，Explore 的確能提供不少呈現數據的思路。
![用 Explore 呈現簡單表格的數據](/blog/20150930-google-sheets-explore/pic_1.png)

## 2.探索數據：幫忙挖掘潛在關聯

一些初看沒什麼亮點的表格，往往藏着大新聞。

我選取的第二個例子[5][6]，統計了香港各區年齡超過65歲的人口比例、慣用廣東話的人口比例和慣用英語的人口比例。一看到這張表，最自然的反應就是，人口年齡和慣用語言之間會不會有關係呢？來看 Explore 有何洞見。

在一秒畫出的十幾張圖表裏，Explore 認為最有趣的發現是，慣用廣東話的人口比例每增加10%，慣用英語的人口比例就會下降7%，這和我們的常識相吻合。雖然在這個例子中 Explore 沒有給出我最想知道的答案，但它兩兩比較了表中的三個變量，幫忙發掘潛在的關聯。

![用 Explore 呈現簡單表格的數據](/blog/20150930-google-sheets-explore/pic_2.png)

## 3.結構扁平的表格：請和 pivot table 一起使用

處理大批量數據，一般離不開結構扁平的表格，如下圖所示，這類表格信息龐雜、沒有重點。我選取了2011年全港居民的月收入統計來做試驗[7]，這張表格有超過20萬項數據。此時 Explore 就有些力不從心了，它能做的只是發現某列數字的最大或最小值，或是統計不同字符串在某列出現的次數及比例。

在原表格的基礎上做出 pivot table (又稱樞紐分析表，是一種基於原始表格的動態表格，便於將大量的數據集縮小、或分析數據之間的關係) 以後，Explore 能給出新的呈現，做「篩選」和「排序」時，圖表也會實時變化。

![當 Explore 遇到扁平化表格，最好先使用 pivot table 選出要點](/blog/20150930-google-sheets-explore/pic_3.png)

總之，Google Sheets 新出的 Explore 能快速畫圖，也能做簡單的數據分析，最適合在面對數據毫無頭緒的時候，用來開啟思路。



資料來源：
[1] [Quickly get insights on a spreadsheet using Explore](https://support.google.com/docs/answer/6280499?hl=en) 
[2] [十八區人工大比拼，你份量攞第幾？](http://salary360.initiumlab.com/#/)
[3] [香港政府統計處 2011香港人口普查](http://www.census2011.gov.hk/tc/)
[4] [2001年、2006年及2011年按房屋類型劃分的家庭住戶數目](http://www.census2011.gov.hk/tc/main-table/E103.html)
[5] [2011年按區議會選區及慣用語言劃分的五歲及以上的人口](http://www.census2011.gov.hk/tc/main-table/A301.html)
[6] [2011年按區議會選區、性別及年齡組別劃分的人口](http://www.census2011.gov.hk/tc/main-table/A303.html)
[7] [Gazetteer HK](http://gazetteer.hk/#/)
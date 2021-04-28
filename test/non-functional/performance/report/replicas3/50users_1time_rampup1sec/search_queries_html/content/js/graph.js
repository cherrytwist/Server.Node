/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 2823.0, "minX": 0.0, "maxY": 3553.0, "series": [{"data": [[0.0, 2823.0], [0.1, 2823.0], [0.2, 2823.0], [0.3, 2823.0], [0.4, 2823.0], [0.5, 2823.0], [0.6, 2823.0], [0.7, 2823.0], [0.8, 2823.0], [0.9, 2823.0], [1.0, 2823.0], [1.1, 2823.0], [1.2, 2823.0], [1.3, 2823.0], [1.4, 2823.0], [1.5, 2823.0], [1.6, 2823.0], [1.7, 2823.0], [1.8, 2823.0], [1.9, 2823.0], [2.0, 2851.0], [2.1, 2851.0], [2.2, 2851.0], [2.3, 2851.0], [2.4, 2851.0], [2.5, 2851.0], [2.6, 2851.0], [2.7, 2851.0], [2.8, 2851.0], [2.9, 2851.0], [3.0, 2851.0], [3.1, 2851.0], [3.2, 2851.0], [3.3, 2851.0], [3.4, 2851.0], [3.5, 2851.0], [3.6, 2851.0], [3.7, 2851.0], [3.8, 2851.0], [3.9, 2851.0], [4.0, 2878.0], [4.1, 2878.0], [4.2, 2878.0], [4.3, 2878.0], [4.4, 2878.0], [4.5, 2878.0], [4.6, 2878.0], [4.7, 2878.0], [4.8, 2878.0], [4.9, 2878.0], [5.0, 2878.0], [5.1, 2878.0], [5.2, 2878.0], [5.3, 2878.0], [5.4, 2878.0], [5.5, 2878.0], [5.6, 2878.0], [5.7, 2878.0], [5.8, 2878.0], [5.9, 2878.0], [6.0, 2904.0], [6.1, 2904.0], [6.2, 2904.0], [6.3, 2904.0], [6.4, 2904.0], [6.5, 2904.0], [6.6, 2904.0], [6.7, 2904.0], [6.8, 2904.0], [6.9, 2904.0], [7.0, 2904.0], [7.1, 2904.0], [7.2, 2904.0], [7.3, 2904.0], [7.4, 2904.0], [7.5, 2904.0], [7.6, 2904.0], [7.7, 2904.0], [7.8, 2904.0], [7.9, 2904.0], [8.0, 2927.0], [8.1, 2927.0], [8.2, 2927.0], [8.3, 2927.0], [8.4, 2927.0], [8.5, 2927.0], [8.6, 2927.0], [8.7, 2927.0], [8.8, 2927.0], [8.9, 2927.0], [9.0, 2927.0], [9.1, 2927.0], [9.2, 2927.0], [9.3, 2927.0], [9.4, 2927.0], [9.5, 2927.0], [9.6, 2927.0], [9.7, 2927.0], [9.8, 2927.0], [9.9, 2927.0], [10.0, 2949.0], [10.1, 2949.0], [10.2, 2949.0], [10.3, 2949.0], [10.4, 2949.0], [10.5, 2949.0], [10.6, 2949.0], [10.7, 2949.0], [10.8, 2949.0], [10.9, 2949.0], [11.0, 2949.0], [11.1, 2949.0], [11.2, 2949.0], [11.3, 2949.0], [11.4, 2949.0], [11.5, 2949.0], [11.6, 2949.0], [11.7, 2949.0], [11.8, 2949.0], [11.9, 2949.0], [12.0, 3000.0], [12.1, 3000.0], [12.2, 3000.0], [12.3, 3000.0], [12.4, 3000.0], [12.5, 3000.0], [12.6, 3000.0], [12.7, 3000.0], [12.8, 3000.0], [12.9, 3000.0], [13.0, 3000.0], [13.1, 3000.0], [13.2, 3000.0], [13.3, 3000.0], [13.4, 3000.0], [13.5, 3000.0], [13.6, 3000.0], [13.7, 3000.0], [13.8, 3000.0], [13.9, 3000.0], [14.0, 3003.0], [14.1, 3003.0], [14.2, 3003.0], [14.3, 3003.0], [14.4, 3003.0], [14.5, 3003.0], [14.6, 3003.0], [14.7, 3003.0], [14.8, 3003.0], [14.9, 3003.0], [15.0, 3003.0], [15.1, 3003.0], [15.2, 3003.0], [15.3, 3003.0], [15.4, 3003.0], [15.5, 3003.0], [15.6, 3003.0], [15.7, 3003.0], [15.8, 3003.0], [15.9, 3003.0], [16.0, 3004.0], [16.1, 3004.0], [16.2, 3004.0], [16.3, 3004.0], [16.4, 3004.0], [16.5, 3004.0], [16.6, 3004.0], [16.7, 3004.0], [16.8, 3004.0], [16.9, 3004.0], [17.0, 3004.0], [17.1, 3004.0], [17.2, 3004.0], [17.3, 3004.0], [17.4, 3004.0], [17.5, 3004.0], [17.6, 3004.0], [17.7, 3004.0], [17.8, 3004.0], [17.9, 3004.0], [18.0, 3037.0], [18.1, 3037.0], [18.2, 3037.0], [18.3, 3037.0], [18.4, 3037.0], [18.5, 3037.0], [18.6, 3037.0], [18.7, 3037.0], [18.8, 3037.0], [18.9, 3037.0], [19.0, 3037.0], [19.1, 3037.0], [19.2, 3037.0], [19.3, 3037.0], [19.4, 3037.0], [19.5, 3037.0], [19.6, 3037.0], [19.7, 3037.0], [19.8, 3037.0], [19.9, 3037.0], [20.0, 3093.0], [20.1, 3093.0], [20.2, 3093.0], [20.3, 3093.0], [20.4, 3093.0], [20.5, 3093.0], [20.6, 3093.0], [20.7, 3093.0], [20.8, 3093.0], [20.9, 3093.0], [21.0, 3093.0], [21.1, 3093.0], [21.2, 3093.0], [21.3, 3093.0], [21.4, 3093.0], [21.5, 3093.0], [21.6, 3093.0], [21.7, 3093.0], [21.8, 3093.0], [21.9, 3093.0], [22.0, 3096.0], [22.1, 3096.0], [22.2, 3096.0], [22.3, 3096.0], [22.4, 3096.0], [22.5, 3096.0], [22.6, 3096.0], [22.7, 3096.0], [22.8, 3096.0], [22.9, 3096.0], [23.0, 3096.0], [23.1, 3096.0], [23.2, 3096.0], [23.3, 3096.0], [23.4, 3096.0], [23.5, 3096.0], [23.6, 3096.0], [23.7, 3096.0], [23.8, 3096.0], [23.9, 3096.0], [24.0, 3109.0], [24.1, 3109.0], [24.2, 3109.0], [24.3, 3109.0], [24.4, 3109.0], [24.5, 3109.0], [24.6, 3109.0], [24.7, 3109.0], [24.8, 3109.0], [24.9, 3109.0], [25.0, 3109.0], [25.1, 3109.0], [25.2, 3109.0], [25.3, 3109.0], [25.4, 3109.0], [25.5, 3109.0], [25.6, 3109.0], [25.7, 3109.0], [25.8, 3109.0], [25.9, 3109.0], [26.0, 3114.0], [26.1, 3114.0], [26.2, 3114.0], [26.3, 3114.0], [26.4, 3114.0], [26.5, 3114.0], [26.6, 3114.0], [26.7, 3114.0], [26.8, 3114.0], [26.9, 3114.0], [27.0, 3114.0], [27.1, 3114.0], [27.2, 3114.0], [27.3, 3114.0], [27.4, 3114.0], [27.5, 3114.0], [27.6, 3114.0], [27.7, 3114.0], [27.8, 3114.0], [27.9, 3114.0], [28.0, 3121.0], [28.1, 3121.0], [28.2, 3121.0], [28.3, 3121.0], [28.4, 3121.0], [28.5, 3121.0], [28.6, 3121.0], [28.7, 3121.0], [28.8, 3121.0], [28.9, 3121.0], [29.0, 3121.0], [29.1, 3121.0], [29.2, 3121.0], [29.3, 3121.0], [29.4, 3121.0], [29.5, 3121.0], [29.6, 3121.0], [29.7, 3121.0], [29.8, 3121.0], [29.9, 3121.0], [30.0, 3122.0], [30.1, 3122.0], [30.2, 3122.0], [30.3, 3122.0], [30.4, 3122.0], [30.5, 3122.0], [30.6, 3122.0], [30.7, 3122.0], [30.8, 3122.0], [30.9, 3122.0], [31.0, 3122.0], [31.1, 3122.0], [31.2, 3122.0], [31.3, 3122.0], [31.4, 3122.0], [31.5, 3122.0], [31.6, 3122.0], [31.7, 3122.0], [31.8, 3122.0], [31.9, 3122.0], [32.0, 3141.0], [32.1, 3141.0], [32.2, 3141.0], [32.3, 3141.0], [32.4, 3141.0], [32.5, 3141.0], [32.6, 3141.0], [32.7, 3141.0], [32.8, 3141.0], [32.9, 3141.0], [33.0, 3141.0], [33.1, 3141.0], [33.2, 3141.0], [33.3, 3141.0], [33.4, 3141.0], [33.5, 3141.0], [33.6, 3141.0], [33.7, 3141.0], [33.8, 3141.0], [33.9, 3141.0], [34.0, 3206.0], [34.1, 3206.0], [34.2, 3206.0], [34.3, 3206.0], [34.4, 3206.0], [34.5, 3206.0], [34.6, 3206.0], [34.7, 3206.0], [34.8, 3206.0], [34.9, 3206.0], [35.0, 3206.0], [35.1, 3206.0], [35.2, 3206.0], [35.3, 3206.0], [35.4, 3206.0], [35.5, 3206.0], [35.6, 3206.0], [35.7, 3206.0], [35.8, 3206.0], [35.9, 3206.0], [36.0, 3225.0], [36.1, 3225.0], [36.2, 3225.0], [36.3, 3225.0], [36.4, 3225.0], [36.5, 3225.0], [36.6, 3225.0], [36.7, 3225.0], [36.8, 3225.0], [36.9, 3225.0], [37.0, 3225.0], [37.1, 3225.0], [37.2, 3225.0], [37.3, 3225.0], [37.4, 3225.0], [37.5, 3225.0], [37.6, 3225.0], [37.7, 3225.0], [37.8, 3225.0], [37.9, 3225.0], [38.0, 3231.0], [38.1, 3231.0], [38.2, 3231.0], [38.3, 3231.0], [38.4, 3231.0], [38.5, 3231.0], [38.6, 3231.0], [38.7, 3231.0], [38.8, 3231.0], [38.9, 3231.0], [39.0, 3231.0], [39.1, 3231.0], [39.2, 3231.0], [39.3, 3231.0], [39.4, 3231.0], [39.5, 3231.0], [39.6, 3231.0], [39.7, 3231.0], [39.8, 3231.0], [39.9, 3231.0], [40.0, 3244.0], [40.1, 3244.0], [40.2, 3244.0], [40.3, 3244.0], [40.4, 3244.0], [40.5, 3244.0], [40.6, 3244.0], [40.7, 3244.0], [40.8, 3244.0], [40.9, 3244.0], [41.0, 3244.0], [41.1, 3244.0], [41.2, 3244.0], [41.3, 3244.0], [41.4, 3244.0], [41.5, 3244.0], [41.6, 3244.0], [41.7, 3244.0], [41.8, 3244.0], [41.9, 3244.0], [42.0, 3268.0], [42.1, 3268.0], [42.2, 3268.0], [42.3, 3268.0], [42.4, 3268.0], [42.5, 3268.0], [42.6, 3268.0], [42.7, 3268.0], [42.8, 3268.0], [42.9, 3268.0], [43.0, 3268.0], [43.1, 3268.0], [43.2, 3268.0], [43.3, 3268.0], [43.4, 3268.0], [43.5, 3268.0], [43.6, 3268.0], [43.7, 3268.0], [43.8, 3268.0], [43.9, 3268.0], [44.0, 3290.0], [44.1, 3290.0], [44.2, 3290.0], [44.3, 3290.0], [44.4, 3290.0], [44.5, 3290.0], [44.6, 3290.0], [44.7, 3290.0], [44.8, 3290.0], [44.9, 3290.0], [45.0, 3290.0], [45.1, 3290.0], [45.2, 3290.0], [45.3, 3290.0], [45.4, 3290.0], [45.5, 3290.0], [45.6, 3290.0], [45.7, 3290.0], [45.8, 3290.0], [45.9, 3290.0], [46.0, 3319.0], [46.1, 3319.0], [46.2, 3319.0], [46.3, 3319.0], [46.4, 3319.0], [46.5, 3319.0], [46.6, 3319.0], [46.7, 3319.0], [46.8, 3319.0], [46.9, 3319.0], [47.0, 3319.0], [47.1, 3319.0], [47.2, 3319.0], [47.3, 3319.0], [47.4, 3319.0], [47.5, 3319.0], [47.6, 3319.0], [47.7, 3319.0], [47.8, 3319.0], [47.9, 3319.0], [48.0, 3324.0], [48.1, 3324.0], [48.2, 3324.0], [48.3, 3324.0], [48.4, 3324.0], [48.5, 3324.0], [48.6, 3324.0], [48.7, 3324.0], [48.8, 3324.0], [48.9, 3324.0], [49.0, 3324.0], [49.1, 3324.0], [49.2, 3324.0], [49.3, 3324.0], [49.4, 3324.0], [49.5, 3324.0], [49.6, 3324.0], [49.7, 3324.0], [49.8, 3324.0], [49.9, 3324.0], [50.0, 3329.0], [50.1, 3329.0], [50.2, 3329.0], [50.3, 3329.0], [50.4, 3329.0], [50.5, 3329.0], [50.6, 3329.0], [50.7, 3329.0], [50.8, 3329.0], [50.9, 3329.0], [51.0, 3329.0], [51.1, 3329.0], [51.2, 3329.0], [51.3, 3329.0], [51.4, 3329.0], [51.5, 3329.0], [51.6, 3329.0], [51.7, 3329.0], [51.8, 3329.0], [51.9, 3329.0], [52.0, 3338.0], [52.1, 3338.0], [52.2, 3338.0], [52.3, 3338.0], [52.4, 3338.0], [52.5, 3338.0], [52.6, 3338.0], [52.7, 3338.0], [52.8, 3338.0], [52.9, 3338.0], [53.0, 3338.0], [53.1, 3338.0], [53.2, 3338.0], [53.3, 3338.0], [53.4, 3338.0], [53.5, 3338.0], [53.6, 3338.0], [53.7, 3338.0], [53.8, 3338.0], [53.9, 3338.0], [54.0, 3356.0], [54.1, 3356.0], [54.2, 3356.0], [54.3, 3356.0], [54.4, 3356.0], [54.5, 3356.0], [54.6, 3356.0], [54.7, 3356.0], [54.8, 3356.0], [54.9, 3356.0], [55.0, 3356.0], [55.1, 3356.0], [55.2, 3356.0], [55.3, 3356.0], [55.4, 3356.0], [55.5, 3356.0], [55.6, 3356.0], [55.7, 3356.0], [55.8, 3356.0], [55.9, 3356.0], [56.0, 3385.0], [56.1, 3385.0], [56.2, 3385.0], [56.3, 3385.0], [56.4, 3385.0], [56.5, 3385.0], [56.6, 3385.0], [56.7, 3385.0], [56.8, 3385.0], [56.9, 3385.0], [57.0, 3385.0], [57.1, 3385.0], [57.2, 3385.0], [57.3, 3385.0], [57.4, 3385.0], [57.5, 3385.0], [57.6, 3385.0], [57.7, 3385.0], [57.8, 3385.0], [57.9, 3385.0], [58.0, 3400.0], [58.1, 3400.0], [58.2, 3400.0], [58.3, 3400.0], [58.4, 3400.0], [58.5, 3400.0], [58.6, 3400.0], [58.7, 3400.0], [58.8, 3400.0], [58.9, 3400.0], [59.0, 3400.0], [59.1, 3400.0], [59.2, 3400.0], [59.3, 3400.0], [59.4, 3400.0], [59.5, 3400.0], [59.6, 3400.0], [59.7, 3400.0], [59.8, 3400.0], [59.9, 3400.0], [60.0, 3403.0], [60.1, 3403.0], [60.2, 3403.0], [60.3, 3403.0], [60.4, 3403.0], [60.5, 3403.0], [60.6, 3403.0], [60.7, 3403.0], [60.8, 3403.0], [60.9, 3403.0], [61.0, 3403.0], [61.1, 3403.0], [61.2, 3403.0], [61.3, 3403.0], [61.4, 3403.0], [61.5, 3403.0], [61.6, 3403.0], [61.7, 3403.0], [61.8, 3403.0], [61.9, 3403.0], [62.0, 3406.0], [62.1, 3406.0], [62.2, 3406.0], [62.3, 3406.0], [62.4, 3406.0], [62.5, 3406.0], [62.6, 3406.0], [62.7, 3406.0], [62.8, 3406.0], [62.9, 3406.0], [63.0, 3406.0], [63.1, 3406.0], [63.2, 3406.0], [63.3, 3406.0], [63.4, 3406.0], [63.5, 3406.0], [63.6, 3406.0], [63.7, 3406.0], [63.8, 3406.0], [63.9, 3406.0], [64.0, 3433.0], [64.1, 3433.0], [64.2, 3433.0], [64.3, 3433.0], [64.4, 3433.0], [64.5, 3433.0], [64.6, 3433.0], [64.7, 3433.0], [64.8, 3433.0], [64.9, 3433.0], [65.0, 3433.0], [65.1, 3433.0], [65.2, 3433.0], [65.3, 3433.0], [65.4, 3433.0], [65.5, 3433.0], [65.6, 3433.0], [65.7, 3433.0], [65.8, 3433.0], [65.9, 3433.0], [66.0, 3433.0], [66.1, 3433.0], [66.2, 3433.0], [66.3, 3433.0], [66.4, 3433.0], [66.5, 3433.0], [66.6, 3433.0], [66.7, 3433.0], [66.8, 3433.0], [66.9, 3433.0], [67.0, 3433.0], [67.1, 3433.0], [67.2, 3433.0], [67.3, 3433.0], [67.4, 3433.0], [67.5, 3433.0], [67.6, 3433.0], [67.7, 3433.0], [67.8, 3433.0], [67.9, 3433.0], [68.0, 3439.0], [68.1, 3439.0], [68.2, 3439.0], [68.3, 3439.0], [68.4, 3439.0], [68.5, 3439.0], [68.6, 3439.0], [68.7, 3439.0], [68.8, 3439.0], [68.9, 3439.0], [69.0, 3439.0], [69.1, 3439.0], [69.2, 3439.0], [69.3, 3439.0], [69.4, 3439.0], [69.5, 3439.0], [69.6, 3439.0], [69.7, 3439.0], [69.8, 3439.0], [69.9, 3439.0], [70.0, 3442.0], [70.1, 3442.0], [70.2, 3442.0], [70.3, 3442.0], [70.4, 3442.0], [70.5, 3442.0], [70.6, 3442.0], [70.7, 3442.0], [70.8, 3442.0], [70.9, 3442.0], [71.0, 3442.0], [71.1, 3442.0], [71.2, 3442.0], [71.3, 3442.0], [71.4, 3442.0], [71.5, 3442.0], [71.6, 3442.0], [71.7, 3442.0], [71.8, 3442.0], [71.9, 3442.0], [72.0, 3448.0], [72.1, 3448.0], [72.2, 3448.0], [72.3, 3448.0], [72.4, 3448.0], [72.5, 3448.0], [72.6, 3448.0], [72.7, 3448.0], [72.8, 3448.0], [72.9, 3448.0], [73.0, 3448.0], [73.1, 3448.0], [73.2, 3448.0], [73.3, 3448.0], [73.4, 3448.0], [73.5, 3448.0], [73.6, 3448.0], [73.7, 3448.0], [73.8, 3448.0], [73.9, 3448.0], [74.0, 3449.0], [74.1, 3449.0], [74.2, 3449.0], [74.3, 3449.0], [74.4, 3449.0], [74.5, 3449.0], [74.6, 3449.0], [74.7, 3449.0], [74.8, 3449.0], [74.9, 3449.0], [75.0, 3449.0], [75.1, 3449.0], [75.2, 3449.0], [75.3, 3449.0], [75.4, 3449.0], [75.5, 3449.0], [75.6, 3449.0], [75.7, 3449.0], [75.8, 3449.0], [75.9, 3449.0], [76.0, 3450.0], [76.1, 3450.0], [76.2, 3450.0], [76.3, 3450.0], [76.4, 3450.0], [76.5, 3450.0], [76.6, 3450.0], [76.7, 3450.0], [76.8, 3450.0], [76.9, 3450.0], [77.0, 3450.0], [77.1, 3450.0], [77.2, 3450.0], [77.3, 3450.0], [77.4, 3450.0], [77.5, 3450.0], [77.6, 3450.0], [77.7, 3450.0], [77.8, 3450.0], [77.9, 3450.0], [78.0, 3453.0], [78.1, 3453.0], [78.2, 3453.0], [78.3, 3453.0], [78.4, 3453.0], [78.5, 3453.0], [78.6, 3453.0], [78.7, 3453.0], [78.8, 3453.0], [78.9, 3453.0], [79.0, 3453.0], [79.1, 3453.0], [79.2, 3453.0], [79.3, 3453.0], [79.4, 3453.0], [79.5, 3453.0], [79.6, 3453.0], [79.7, 3453.0], [79.8, 3453.0], [79.9, 3453.0], [80.0, 3457.0], [80.1, 3457.0], [80.2, 3457.0], [80.3, 3457.0], [80.4, 3457.0], [80.5, 3457.0], [80.6, 3457.0], [80.7, 3457.0], [80.8, 3457.0], [80.9, 3457.0], [81.0, 3457.0], [81.1, 3457.0], [81.2, 3457.0], [81.3, 3457.0], [81.4, 3457.0], [81.5, 3457.0], [81.6, 3457.0], [81.7, 3457.0], [81.8, 3457.0], [81.9, 3457.0], [82.0, 3465.0], [82.1, 3465.0], [82.2, 3465.0], [82.3, 3465.0], [82.4, 3465.0], [82.5, 3465.0], [82.6, 3465.0], [82.7, 3465.0], [82.8, 3465.0], [82.9, 3465.0], [83.0, 3465.0], [83.1, 3465.0], [83.2, 3465.0], [83.3, 3465.0], [83.4, 3465.0], [83.5, 3465.0], [83.6, 3465.0], [83.7, 3465.0], [83.8, 3465.0], [83.9, 3465.0], [84.0, 3486.0], [84.1, 3486.0], [84.2, 3486.0], [84.3, 3486.0], [84.4, 3486.0], [84.5, 3486.0], [84.6, 3486.0], [84.7, 3486.0], [84.8, 3486.0], [84.9, 3486.0], [85.0, 3486.0], [85.1, 3486.0], [85.2, 3486.0], [85.3, 3486.0], [85.4, 3486.0], [85.5, 3486.0], [85.6, 3486.0], [85.7, 3486.0], [85.8, 3486.0], [85.9, 3486.0], [86.0, 3505.0], [86.1, 3505.0], [86.2, 3505.0], [86.3, 3505.0], [86.4, 3505.0], [86.5, 3505.0], [86.6, 3505.0], [86.7, 3505.0], [86.8, 3505.0], [86.9, 3505.0], [87.0, 3505.0], [87.1, 3505.0], [87.2, 3505.0], [87.3, 3505.0], [87.4, 3505.0], [87.5, 3505.0], [87.6, 3505.0], [87.7, 3505.0], [87.8, 3505.0], [87.9, 3505.0], [88.0, 3507.0], [88.1, 3507.0], [88.2, 3507.0], [88.3, 3507.0], [88.4, 3507.0], [88.5, 3507.0], [88.6, 3507.0], [88.7, 3507.0], [88.8, 3507.0], [88.9, 3507.0], [89.0, 3507.0], [89.1, 3507.0], [89.2, 3507.0], [89.3, 3507.0], [89.4, 3507.0], [89.5, 3507.0], [89.6, 3507.0], [89.7, 3507.0], [89.8, 3507.0], [89.9, 3507.0], [90.0, 3515.0], [90.1, 3515.0], [90.2, 3515.0], [90.3, 3515.0], [90.4, 3515.0], [90.5, 3515.0], [90.6, 3515.0], [90.7, 3515.0], [90.8, 3515.0], [90.9, 3515.0], [91.0, 3515.0], [91.1, 3515.0], [91.2, 3515.0], [91.3, 3515.0], [91.4, 3515.0], [91.5, 3515.0], [91.6, 3515.0], [91.7, 3515.0], [91.8, 3515.0], [91.9, 3515.0], [92.0, 3525.0], [92.1, 3525.0], [92.2, 3525.0], [92.3, 3525.0], [92.4, 3525.0], [92.5, 3525.0], [92.6, 3525.0], [92.7, 3525.0], [92.8, 3525.0], [92.9, 3525.0], [93.0, 3525.0], [93.1, 3525.0], [93.2, 3525.0], [93.3, 3525.0], [93.4, 3525.0], [93.5, 3525.0], [93.6, 3525.0], [93.7, 3525.0], [93.8, 3525.0], [93.9, 3525.0], [94.0, 3527.0], [94.1, 3527.0], [94.2, 3527.0], [94.3, 3527.0], [94.4, 3527.0], [94.5, 3527.0], [94.6, 3527.0], [94.7, 3527.0], [94.8, 3527.0], [94.9, 3527.0], [95.0, 3527.0], [95.1, 3527.0], [95.2, 3527.0], [95.3, 3527.0], [95.4, 3527.0], [95.5, 3527.0], [95.6, 3527.0], [95.7, 3527.0], [95.8, 3527.0], [95.9, 3527.0], [96.0, 3531.0], [96.1, 3531.0], [96.2, 3531.0], [96.3, 3531.0], [96.4, 3531.0], [96.5, 3531.0], [96.6, 3531.0], [96.7, 3531.0], [96.8, 3531.0], [96.9, 3531.0], [97.0, 3531.0], [97.1, 3531.0], [97.2, 3531.0], [97.3, 3531.0], [97.4, 3531.0], [97.5, 3531.0], [97.6, 3531.0], [97.7, 3531.0], [97.8, 3531.0], [97.9, 3531.0], [98.0, 3553.0], [98.1, 3553.0], [98.2, 3553.0], [98.3, 3553.0], [98.4, 3553.0], [98.5, 3553.0], [98.6, 3553.0], [98.7, 3553.0], [98.8, 3553.0], [98.9, 3553.0], [99.0, 3553.0], [99.1, 3553.0], [99.2, 3553.0], [99.3, 3553.0], [99.4, 3553.0], [99.5, 3553.0], [99.6, 3553.0], [99.7, 3553.0], [99.8, 3553.0], [99.9, 3553.0]], "isOverall": false, "label": "Search", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 3.0, "minX": 2800.0, "maxY": 14.0, "series": [{"data": [[2800.0, 3.0], [2900.0, 3.0], [3000.0, 6.0], [3100.0, 5.0], [3300.0, 6.0], [3200.0, 6.0], [3400.0, 14.0], [3500.0, 7.0]], "isOverall": false, "label": "Search", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 3500.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 50.0, "minX": 2.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 50.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 50.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 27.04, "minX": 1.61951982E12, "maxY": 27.04, "series": [{"data": [[1.61951982E12, 27.04]], "isOverall": false, "label": "CT Benchmark:  Queries", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.61951982E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 2851.0, "minX": 7.0, "maxY": 3531.0, "series": [{"data": [[35.0, 3176.1666666666665], [37.0, 3445.5], [36.0, 3457.0], [41.0, 2851.0], [40.0, 3231.6666666666665], [43.0, 2878.0], [42.0, 3400.0], [45.0, 3109.0], [44.0, 3406.0], [47.0, 3225.0], [46.0, 3003.0], [49.0, 3356.0], [48.0, 3231.0], [50.0, 3338.0], [7.0, 3270.0], [9.0, 3398.5], [11.0, 3525.0], [13.0, 3531.0], [15.0, 3388.5], [18.0, 3235.0], [19.0, 3511.0], [22.0, 3361.0], [23.0, 3173.5], [26.0, 3377.0], [28.0, 3104.0]], "isOverall": false, "label": "Search", "isController": false}, {"data": [[27.04, 3270.2799999999993]], "isOverall": false, "label": "Search-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 50.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 486.6666666666667, "minX": 1.61951982E12, "maxY": 506.6666666666667, "series": [{"data": [[1.61951982E12, 486.6666666666667]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.61951982E12, 506.6666666666667]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.61951982E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 3270.2799999999993, "minX": 1.61951982E12, "maxY": 3270.2799999999993, "series": [{"data": [[1.61951982E12, 3270.2799999999993]], "isOverall": false, "label": "Search", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.61951982E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 3270.16, "minX": 1.61951982E12, "maxY": 3270.16, "series": [{"data": [[1.61951982E12, 3270.16]], "isOverall": false, "label": "Search", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.61951982E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 2398.68, "minX": 1.61951982E12, "maxY": 2398.68, "series": [{"data": [[1.61951982E12, 2398.68]], "isOverall": false, "label": "Search", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.61951982E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 2823.0, "minX": 1.61951982E12, "maxY": 3553.0, "series": [{"data": [[1.61951982E12, 3553.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.61951982E12, 3514.2]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.61951982E12, 3553.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.61951982E12, 3528.8]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.61951982E12, 2823.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.61951982E12, 3326.5]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.61951982E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 3326.5, "minX": 50.0, "maxY": 3326.5, "series": [{"data": [[50.0, 3326.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 50.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 3326.5, "minX": 50.0, "maxY": 3326.5, "series": [{"data": [[50.0, 3326.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 50.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 0.8333333333333334, "minX": 1.61951982E12, "maxY": 0.8333333333333334, "series": [{"data": [[1.61951982E12, 0.8333333333333334]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.61951982E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 0.8333333333333334, "minX": 1.61951982E12, "maxY": 0.8333333333333334, "series": [{"data": [[1.61951982E12, 0.8333333333333334]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.61951982E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 0.8333333333333334, "minX": 1.61951982E12, "maxY": 0.8333333333333334, "series": [{"data": [[1.61951982E12, 0.8333333333333334]], "isOverall": false, "label": "Search-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.61951982E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 0.8333333333333334, "minX": 1.61951982E12, "maxY": 0.8333333333333334, "series": [{"data": [[1.61951982E12, 0.8333333333333334]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.61951982E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}


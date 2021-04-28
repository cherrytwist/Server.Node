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
        data: {"result": {"minY": 2457.0, "minX": 0.0, "maxY": 3162.0, "series": [{"data": [[0.0, 2457.0], [0.1, 2457.0], [0.2, 2457.0], [0.3, 2457.0], [0.4, 2457.0], [0.5, 2457.0], [0.6, 2457.0], [0.7, 2457.0], [0.8, 2457.0], [0.9, 2457.0], [1.0, 2457.0], [1.1, 2457.0], [1.2, 2457.0], [1.3, 2457.0], [1.4, 2457.0], [1.5, 2457.0], [1.6, 2457.0], [1.7, 2457.0], [1.8, 2457.0], [1.9, 2457.0], [2.0, 2470.0], [2.1, 2470.0], [2.2, 2470.0], [2.3, 2470.0], [2.4, 2470.0], [2.5, 2470.0], [2.6, 2470.0], [2.7, 2470.0], [2.8, 2470.0], [2.9, 2470.0], [3.0, 2470.0], [3.1, 2470.0], [3.2, 2470.0], [3.3, 2470.0], [3.4, 2470.0], [3.5, 2470.0], [3.6, 2470.0], [3.7, 2470.0], [3.8, 2470.0], [3.9, 2470.0], [4.0, 2518.0], [4.1, 2518.0], [4.2, 2518.0], [4.3, 2518.0], [4.4, 2518.0], [4.5, 2518.0], [4.6, 2518.0], [4.7, 2518.0], [4.8, 2518.0], [4.9, 2518.0], [5.0, 2518.0], [5.1, 2518.0], [5.2, 2518.0], [5.3, 2518.0], [5.4, 2518.0], [5.5, 2518.0], [5.6, 2518.0], [5.7, 2518.0], [5.8, 2518.0], [5.9, 2518.0], [6.0, 2571.0], [6.1, 2571.0], [6.2, 2571.0], [6.3, 2571.0], [6.4, 2571.0], [6.5, 2571.0], [6.6, 2571.0], [6.7, 2571.0], [6.8, 2571.0], [6.9, 2571.0], [7.0, 2571.0], [7.1, 2571.0], [7.2, 2571.0], [7.3, 2571.0], [7.4, 2571.0], [7.5, 2571.0], [7.6, 2571.0], [7.7, 2571.0], [7.8, 2571.0], [7.9, 2571.0], [8.0, 2579.0], [8.1, 2579.0], [8.2, 2579.0], [8.3, 2579.0], [8.4, 2579.0], [8.5, 2579.0], [8.6, 2579.0], [8.7, 2579.0], [8.8, 2579.0], [8.9, 2579.0], [9.0, 2579.0], [9.1, 2579.0], [9.2, 2579.0], [9.3, 2579.0], [9.4, 2579.0], [9.5, 2579.0], [9.6, 2579.0], [9.7, 2579.0], [9.8, 2579.0], [9.9, 2579.0], [10.0, 2583.0], [10.1, 2583.0], [10.2, 2583.0], [10.3, 2583.0], [10.4, 2583.0], [10.5, 2583.0], [10.6, 2583.0], [10.7, 2583.0], [10.8, 2583.0], [10.9, 2583.0], [11.0, 2583.0], [11.1, 2583.0], [11.2, 2583.0], [11.3, 2583.0], [11.4, 2583.0], [11.5, 2583.0], [11.6, 2583.0], [11.7, 2583.0], [11.8, 2583.0], [11.9, 2583.0], [12.0, 2614.0], [12.1, 2614.0], [12.2, 2614.0], [12.3, 2614.0], [12.4, 2614.0], [12.5, 2614.0], [12.6, 2614.0], [12.7, 2614.0], [12.8, 2614.0], [12.9, 2614.0], [13.0, 2614.0], [13.1, 2614.0], [13.2, 2614.0], [13.3, 2614.0], [13.4, 2614.0], [13.5, 2614.0], [13.6, 2614.0], [13.7, 2614.0], [13.8, 2614.0], [13.9, 2614.0], [14.0, 2624.0], [14.1, 2624.0], [14.2, 2624.0], [14.3, 2624.0], [14.4, 2624.0], [14.5, 2624.0], [14.6, 2624.0], [14.7, 2624.0], [14.8, 2624.0], [14.9, 2624.0], [15.0, 2624.0], [15.1, 2624.0], [15.2, 2624.0], [15.3, 2624.0], [15.4, 2624.0], [15.5, 2624.0], [15.6, 2624.0], [15.7, 2624.0], [15.8, 2624.0], [15.9, 2624.0], [16.0, 2662.0], [16.1, 2662.0], [16.2, 2662.0], [16.3, 2662.0], [16.4, 2662.0], [16.5, 2662.0], [16.6, 2662.0], [16.7, 2662.0], [16.8, 2662.0], [16.9, 2662.0], [17.0, 2662.0], [17.1, 2662.0], [17.2, 2662.0], [17.3, 2662.0], [17.4, 2662.0], [17.5, 2662.0], [17.6, 2662.0], [17.7, 2662.0], [17.8, 2662.0], [17.9, 2662.0], [18.0, 2697.0], [18.1, 2697.0], [18.2, 2697.0], [18.3, 2697.0], [18.4, 2697.0], [18.5, 2697.0], [18.6, 2697.0], [18.7, 2697.0], [18.8, 2697.0], [18.9, 2697.0], [19.0, 2697.0], [19.1, 2697.0], [19.2, 2697.0], [19.3, 2697.0], [19.4, 2697.0], [19.5, 2697.0], [19.6, 2697.0], [19.7, 2697.0], [19.8, 2697.0], [19.9, 2697.0], [20.0, 2706.0], [20.1, 2706.0], [20.2, 2706.0], [20.3, 2706.0], [20.4, 2706.0], [20.5, 2706.0], [20.6, 2706.0], [20.7, 2706.0], [20.8, 2706.0], [20.9, 2706.0], [21.0, 2706.0], [21.1, 2706.0], [21.2, 2706.0], [21.3, 2706.0], [21.4, 2706.0], [21.5, 2706.0], [21.6, 2706.0], [21.7, 2706.0], [21.8, 2706.0], [21.9, 2706.0], [22.0, 2721.0], [22.1, 2721.0], [22.2, 2721.0], [22.3, 2721.0], [22.4, 2721.0], [22.5, 2721.0], [22.6, 2721.0], [22.7, 2721.0], [22.8, 2721.0], [22.9, 2721.0], [23.0, 2721.0], [23.1, 2721.0], [23.2, 2721.0], [23.3, 2721.0], [23.4, 2721.0], [23.5, 2721.0], [23.6, 2721.0], [23.7, 2721.0], [23.8, 2721.0], [23.9, 2721.0], [24.0, 2725.0], [24.1, 2725.0], [24.2, 2725.0], [24.3, 2725.0], [24.4, 2725.0], [24.5, 2725.0], [24.6, 2725.0], [24.7, 2725.0], [24.8, 2725.0], [24.9, 2725.0], [25.0, 2725.0], [25.1, 2725.0], [25.2, 2725.0], [25.3, 2725.0], [25.4, 2725.0], [25.5, 2725.0], [25.6, 2725.0], [25.7, 2725.0], [25.8, 2725.0], [25.9, 2725.0], [26.0, 2729.0], [26.1, 2729.0], [26.2, 2729.0], [26.3, 2729.0], [26.4, 2729.0], [26.5, 2729.0], [26.6, 2729.0], [26.7, 2729.0], [26.8, 2729.0], [26.9, 2729.0], [27.0, 2729.0], [27.1, 2729.0], [27.2, 2729.0], [27.3, 2729.0], [27.4, 2729.0], [27.5, 2729.0], [27.6, 2729.0], [27.7, 2729.0], [27.8, 2729.0], [27.9, 2729.0], [28.0, 2744.0], [28.1, 2744.0], [28.2, 2744.0], [28.3, 2744.0], [28.4, 2744.0], [28.5, 2744.0], [28.6, 2744.0], [28.7, 2744.0], [28.8, 2744.0], [28.9, 2744.0], [29.0, 2744.0], [29.1, 2744.0], [29.2, 2744.0], [29.3, 2744.0], [29.4, 2744.0], [29.5, 2744.0], [29.6, 2744.0], [29.7, 2744.0], [29.8, 2744.0], [29.9, 2744.0], [30.0, 2807.0], [30.1, 2807.0], [30.2, 2807.0], [30.3, 2807.0], [30.4, 2807.0], [30.5, 2807.0], [30.6, 2807.0], [30.7, 2807.0], [30.8, 2807.0], [30.9, 2807.0], [31.0, 2807.0], [31.1, 2807.0], [31.2, 2807.0], [31.3, 2807.0], [31.4, 2807.0], [31.5, 2807.0], [31.6, 2807.0], [31.7, 2807.0], [31.8, 2807.0], [31.9, 2807.0], [32.0, 2813.0], [32.1, 2813.0], [32.2, 2813.0], [32.3, 2813.0], [32.4, 2813.0], [32.5, 2813.0], [32.6, 2813.0], [32.7, 2813.0], [32.8, 2813.0], [32.9, 2813.0], [33.0, 2813.0], [33.1, 2813.0], [33.2, 2813.0], [33.3, 2813.0], [33.4, 2813.0], [33.5, 2813.0], [33.6, 2813.0], [33.7, 2813.0], [33.8, 2813.0], [33.9, 2813.0], [34.0, 2818.0], [34.1, 2818.0], [34.2, 2818.0], [34.3, 2818.0], [34.4, 2818.0], [34.5, 2818.0], [34.6, 2818.0], [34.7, 2818.0], [34.8, 2818.0], [34.9, 2818.0], [35.0, 2818.0], [35.1, 2818.0], [35.2, 2818.0], [35.3, 2818.0], [35.4, 2818.0], [35.5, 2818.0], [35.6, 2818.0], [35.7, 2818.0], [35.8, 2818.0], [35.9, 2818.0], [36.0, 2850.0], [36.1, 2850.0], [36.2, 2850.0], [36.3, 2850.0], [36.4, 2850.0], [36.5, 2850.0], [36.6, 2850.0], [36.7, 2850.0], [36.8, 2850.0], [36.9, 2850.0], [37.0, 2850.0], [37.1, 2850.0], [37.2, 2850.0], [37.3, 2850.0], [37.4, 2850.0], [37.5, 2850.0], [37.6, 2850.0], [37.7, 2850.0], [37.8, 2850.0], [37.9, 2850.0], [38.0, 2856.0], [38.1, 2856.0], [38.2, 2856.0], [38.3, 2856.0], [38.4, 2856.0], [38.5, 2856.0], [38.6, 2856.0], [38.7, 2856.0], [38.8, 2856.0], [38.9, 2856.0], [39.0, 2856.0], [39.1, 2856.0], [39.2, 2856.0], [39.3, 2856.0], [39.4, 2856.0], [39.5, 2856.0], [39.6, 2856.0], [39.7, 2856.0], [39.8, 2856.0], [39.9, 2856.0], [40.0, 2884.0], [40.1, 2884.0], [40.2, 2884.0], [40.3, 2884.0], [40.4, 2884.0], [40.5, 2884.0], [40.6, 2884.0], [40.7, 2884.0], [40.8, 2884.0], [40.9, 2884.0], [41.0, 2884.0], [41.1, 2884.0], [41.2, 2884.0], [41.3, 2884.0], [41.4, 2884.0], [41.5, 2884.0], [41.6, 2884.0], [41.7, 2884.0], [41.8, 2884.0], [41.9, 2884.0], [42.0, 2929.0], [42.1, 2929.0], [42.2, 2929.0], [42.3, 2929.0], [42.4, 2929.0], [42.5, 2929.0], [42.6, 2929.0], [42.7, 2929.0], [42.8, 2929.0], [42.9, 2929.0], [43.0, 2929.0], [43.1, 2929.0], [43.2, 2929.0], [43.3, 2929.0], [43.4, 2929.0], [43.5, 2929.0], [43.6, 2929.0], [43.7, 2929.0], [43.8, 2929.0], [43.9, 2929.0], [44.0, 2934.0], [44.1, 2934.0], [44.2, 2934.0], [44.3, 2934.0], [44.4, 2934.0], [44.5, 2934.0], [44.6, 2934.0], [44.7, 2934.0], [44.8, 2934.0], [44.9, 2934.0], [45.0, 2934.0], [45.1, 2934.0], [45.2, 2934.0], [45.3, 2934.0], [45.4, 2934.0], [45.5, 2934.0], [45.6, 2934.0], [45.7, 2934.0], [45.8, 2934.0], [45.9, 2934.0], [46.0, 2939.0], [46.1, 2939.0], [46.2, 2939.0], [46.3, 2939.0], [46.4, 2939.0], [46.5, 2939.0], [46.6, 2939.0], [46.7, 2939.0], [46.8, 2939.0], [46.9, 2939.0], [47.0, 2939.0], [47.1, 2939.0], [47.2, 2939.0], [47.3, 2939.0], [47.4, 2939.0], [47.5, 2939.0], [47.6, 2939.0], [47.7, 2939.0], [47.8, 2939.0], [47.9, 2939.0], [48.0, 2944.0], [48.1, 2944.0], [48.2, 2944.0], [48.3, 2944.0], [48.4, 2944.0], [48.5, 2944.0], [48.6, 2944.0], [48.7, 2944.0], [48.8, 2944.0], [48.9, 2944.0], [49.0, 2944.0], [49.1, 2944.0], [49.2, 2944.0], [49.3, 2944.0], [49.4, 2944.0], [49.5, 2944.0], [49.6, 2944.0], [49.7, 2944.0], [49.8, 2944.0], [49.9, 2944.0], [50.0, 2954.0], [50.1, 2954.0], [50.2, 2954.0], [50.3, 2954.0], [50.4, 2954.0], [50.5, 2954.0], [50.6, 2954.0], [50.7, 2954.0], [50.8, 2954.0], [50.9, 2954.0], [51.0, 2954.0], [51.1, 2954.0], [51.2, 2954.0], [51.3, 2954.0], [51.4, 2954.0], [51.5, 2954.0], [51.6, 2954.0], [51.7, 2954.0], [51.8, 2954.0], [51.9, 2954.0], [52.0, 2969.0], [52.1, 2969.0], [52.2, 2969.0], [52.3, 2969.0], [52.4, 2969.0], [52.5, 2969.0], [52.6, 2969.0], [52.7, 2969.0], [52.8, 2969.0], [52.9, 2969.0], [53.0, 2969.0], [53.1, 2969.0], [53.2, 2969.0], [53.3, 2969.0], [53.4, 2969.0], [53.5, 2969.0], [53.6, 2969.0], [53.7, 2969.0], [53.8, 2969.0], [53.9, 2969.0], [54.0, 2979.0], [54.1, 2979.0], [54.2, 2979.0], [54.3, 2979.0], [54.4, 2979.0], [54.5, 2979.0], [54.6, 2979.0], [54.7, 2979.0], [54.8, 2979.0], [54.9, 2979.0], [55.0, 2979.0], [55.1, 2979.0], [55.2, 2979.0], [55.3, 2979.0], [55.4, 2979.0], [55.5, 2979.0], [55.6, 2979.0], [55.7, 2979.0], [55.8, 2979.0], [55.9, 2979.0], [56.0, 2996.0], [56.1, 2996.0], [56.2, 2996.0], [56.3, 2996.0], [56.4, 2996.0], [56.5, 2996.0], [56.6, 2996.0], [56.7, 2996.0], [56.8, 2996.0], [56.9, 2996.0], [57.0, 2996.0], [57.1, 2996.0], [57.2, 2996.0], [57.3, 2996.0], [57.4, 2996.0], [57.5, 2996.0], [57.6, 2996.0], [57.7, 2996.0], [57.8, 2996.0], [57.9, 2996.0], [58.0, 2996.0], [58.1, 2996.0], [58.2, 2996.0], [58.3, 2996.0], [58.4, 2996.0], [58.5, 2996.0], [58.6, 2996.0], [58.7, 2996.0], [58.8, 2996.0], [58.9, 2996.0], [59.0, 2996.0], [59.1, 2996.0], [59.2, 2996.0], [59.3, 2996.0], [59.4, 2996.0], [59.5, 2996.0], [59.6, 2996.0], [59.7, 2996.0], [59.8, 2996.0], [59.9, 2996.0], [60.0, 3002.0], [60.1, 3002.0], [60.2, 3002.0], [60.3, 3002.0], [60.4, 3002.0], [60.5, 3002.0], [60.6, 3002.0], [60.7, 3002.0], [60.8, 3002.0], [60.9, 3002.0], [61.0, 3002.0], [61.1, 3002.0], [61.2, 3002.0], [61.3, 3002.0], [61.4, 3002.0], [61.5, 3002.0], [61.6, 3002.0], [61.7, 3002.0], [61.8, 3002.0], [61.9, 3002.0], [62.0, 3020.0], [62.1, 3020.0], [62.2, 3020.0], [62.3, 3020.0], [62.4, 3020.0], [62.5, 3020.0], [62.6, 3020.0], [62.7, 3020.0], [62.8, 3020.0], [62.9, 3020.0], [63.0, 3020.0], [63.1, 3020.0], [63.2, 3020.0], [63.3, 3020.0], [63.4, 3020.0], [63.5, 3020.0], [63.6, 3020.0], [63.7, 3020.0], [63.8, 3020.0], [63.9, 3020.0], [64.0, 3041.0], [64.1, 3041.0], [64.2, 3041.0], [64.3, 3041.0], [64.4, 3041.0], [64.5, 3041.0], [64.6, 3041.0], [64.7, 3041.0], [64.8, 3041.0], [64.9, 3041.0], [65.0, 3041.0], [65.1, 3041.0], [65.2, 3041.0], [65.3, 3041.0], [65.4, 3041.0], [65.5, 3041.0], [65.6, 3041.0], [65.7, 3041.0], [65.8, 3041.0], [65.9, 3041.0], [66.0, 3059.0], [66.1, 3059.0], [66.2, 3059.0], [66.3, 3059.0], [66.4, 3059.0], [66.5, 3059.0], [66.6, 3059.0], [66.7, 3059.0], [66.8, 3059.0], [66.9, 3059.0], [67.0, 3059.0], [67.1, 3059.0], [67.2, 3059.0], [67.3, 3059.0], [67.4, 3059.0], [67.5, 3059.0], [67.6, 3059.0], [67.7, 3059.0], [67.8, 3059.0], [67.9, 3059.0], [68.0, 3060.0], [68.1, 3060.0], [68.2, 3060.0], [68.3, 3060.0], [68.4, 3060.0], [68.5, 3060.0], [68.6, 3060.0], [68.7, 3060.0], [68.8, 3060.0], [68.9, 3060.0], [69.0, 3060.0], [69.1, 3060.0], [69.2, 3060.0], [69.3, 3060.0], [69.4, 3060.0], [69.5, 3060.0], [69.6, 3060.0], [69.7, 3060.0], [69.8, 3060.0], [69.9, 3060.0], [70.0, 3061.0], [70.1, 3061.0], [70.2, 3061.0], [70.3, 3061.0], [70.4, 3061.0], [70.5, 3061.0], [70.6, 3061.0], [70.7, 3061.0], [70.8, 3061.0], [70.9, 3061.0], [71.0, 3061.0], [71.1, 3061.0], [71.2, 3061.0], [71.3, 3061.0], [71.4, 3061.0], [71.5, 3061.0], [71.6, 3061.0], [71.7, 3061.0], [71.8, 3061.0], [71.9, 3061.0], [72.0, 3078.0], [72.1, 3078.0], [72.2, 3078.0], [72.3, 3078.0], [72.4, 3078.0], [72.5, 3078.0], [72.6, 3078.0], [72.7, 3078.0], [72.8, 3078.0], [72.9, 3078.0], [73.0, 3078.0], [73.1, 3078.0], [73.2, 3078.0], [73.3, 3078.0], [73.4, 3078.0], [73.5, 3078.0], [73.6, 3078.0], [73.7, 3078.0], [73.8, 3078.0], [73.9, 3078.0], [74.0, 3084.0], [74.1, 3084.0], [74.2, 3084.0], [74.3, 3084.0], [74.4, 3084.0], [74.5, 3084.0], [74.6, 3084.0], [74.7, 3084.0], [74.8, 3084.0], [74.9, 3084.0], [75.0, 3084.0], [75.1, 3084.0], [75.2, 3084.0], [75.3, 3084.0], [75.4, 3084.0], [75.5, 3084.0], [75.6, 3084.0], [75.7, 3084.0], [75.8, 3084.0], [75.9, 3084.0], [76.0, 3088.0], [76.1, 3088.0], [76.2, 3088.0], [76.3, 3088.0], [76.4, 3088.0], [76.5, 3088.0], [76.6, 3088.0], [76.7, 3088.0], [76.8, 3088.0], [76.9, 3088.0], [77.0, 3088.0], [77.1, 3088.0], [77.2, 3088.0], [77.3, 3088.0], [77.4, 3088.0], [77.5, 3088.0], [77.6, 3088.0], [77.7, 3088.0], [77.8, 3088.0], [77.9, 3088.0], [78.0, 3100.0], [78.1, 3100.0], [78.2, 3100.0], [78.3, 3100.0], [78.4, 3100.0], [78.5, 3100.0], [78.6, 3100.0], [78.7, 3100.0], [78.8, 3100.0], [78.9, 3100.0], [79.0, 3100.0], [79.1, 3100.0], [79.2, 3100.0], [79.3, 3100.0], [79.4, 3100.0], [79.5, 3100.0], [79.6, 3100.0], [79.7, 3100.0], [79.8, 3100.0], [79.9, 3100.0], [80.0, 3101.0], [80.1, 3101.0], [80.2, 3101.0], [80.3, 3101.0], [80.4, 3101.0], [80.5, 3101.0], [80.6, 3101.0], [80.7, 3101.0], [80.8, 3101.0], [80.9, 3101.0], [81.0, 3101.0], [81.1, 3101.0], [81.2, 3101.0], [81.3, 3101.0], [81.4, 3101.0], [81.5, 3101.0], [81.6, 3101.0], [81.7, 3101.0], [81.8, 3101.0], [81.9, 3101.0], [82.0, 3114.0], [82.1, 3114.0], [82.2, 3114.0], [82.3, 3114.0], [82.4, 3114.0], [82.5, 3114.0], [82.6, 3114.0], [82.7, 3114.0], [82.8, 3114.0], [82.9, 3114.0], [83.0, 3114.0], [83.1, 3114.0], [83.2, 3114.0], [83.3, 3114.0], [83.4, 3114.0], [83.5, 3114.0], [83.6, 3114.0], [83.7, 3114.0], [83.8, 3114.0], [83.9, 3114.0], [84.0, 3116.0], [84.1, 3116.0], [84.2, 3116.0], [84.3, 3116.0], [84.4, 3116.0], [84.5, 3116.0], [84.6, 3116.0], [84.7, 3116.0], [84.8, 3116.0], [84.9, 3116.0], [85.0, 3116.0], [85.1, 3116.0], [85.2, 3116.0], [85.3, 3116.0], [85.4, 3116.0], [85.5, 3116.0], [85.6, 3116.0], [85.7, 3116.0], [85.8, 3116.0], [85.9, 3116.0], [86.0, 3146.0], [86.1, 3146.0], [86.2, 3146.0], [86.3, 3146.0], [86.4, 3146.0], [86.5, 3146.0], [86.6, 3146.0], [86.7, 3146.0], [86.8, 3146.0], [86.9, 3146.0], [87.0, 3146.0], [87.1, 3146.0], [87.2, 3146.0], [87.3, 3146.0], [87.4, 3146.0], [87.5, 3146.0], [87.6, 3146.0], [87.7, 3146.0], [87.8, 3146.0], [87.9, 3146.0], [88.0, 3151.0], [88.1, 3151.0], [88.2, 3151.0], [88.3, 3151.0], [88.4, 3151.0], [88.5, 3151.0], [88.6, 3151.0], [88.7, 3151.0], [88.8, 3151.0], [88.9, 3151.0], [89.0, 3151.0], [89.1, 3151.0], [89.2, 3151.0], [89.3, 3151.0], [89.4, 3151.0], [89.5, 3151.0], [89.6, 3151.0], [89.7, 3151.0], [89.8, 3151.0], [89.9, 3151.0], [90.0, 3154.0], [90.1, 3154.0], [90.2, 3154.0], [90.3, 3154.0], [90.4, 3154.0], [90.5, 3154.0], [90.6, 3154.0], [90.7, 3154.0], [90.8, 3154.0], [90.9, 3154.0], [91.0, 3154.0], [91.1, 3154.0], [91.2, 3154.0], [91.3, 3154.0], [91.4, 3154.0], [91.5, 3154.0], [91.6, 3154.0], [91.7, 3154.0], [91.8, 3154.0], [91.9, 3154.0], [92.0, 3158.0], [92.1, 3158.0], [92.2, 3158.0], [92.3, 3158.0], [92.4, 3158.0], [92.5, 3158.0], [92.6, 3158.0], [92.7, 3158.0], [92.8, 3158.0], [92.9, 3158.0], [93.0, 3158.0], [93.1, 3158.0], [93.2, 3158.0], [93.3, 3158.0], [93.4, 3158.0], [93.5, 3158.0], [93.6, 3158.0], [93.7, 3158.0], [93.8, 3158.0], [93.9, 3158.0], [94.0, 3158.0], [94.1, 3158.0], [94.2, 3158.0], [94.3, 3158.0], [94.4, 3158.0], [94.5, 3158.0], [94.6, 3158.0], [94.7, 3158.0], [94.8, 3158.0], [94.9, 3158.0], [95.0, 3158.0], [95.1, 3158.0], [95.2, 3158.0], [95.3, 3158.0], [95.4, 3158.0], [95.5, 3158.0], [95.6, 3158.0], [95.7, 3158.0], [95.8, 3158.0], [95.9, 3158.0], [96.0, 3160.0], [96.1, 3160.0], [96.2, 3160.0], [96.3, 3160.0], [96.4, 3160.0], [96.5, 3160.0], [96.6, 3160.0], [96.7, 3160.0], [96.8, 3160.0], [96.9, 3160.0], [97.0, 3160.0], [97.1, 3160.0], [97.2, 3160.0], [97.3, 3160.0], [97.4, 3160.0], [97.5, 3160.0], [97.6, 3160.0], [97.7, 3160.0], [97.8, 3160.0], [97.9, 3160.0], [98.0, 3162.0], [98.1, 3162.0], [98.2, 3162.0], [98.3, 3162.0], [98.4, 3162.0], [98.5, 3162.0], [98.6, 3162.0], [98.7, 3162.0], [98.8, 3162.0], [98.9, 3162.0], [99.0, 3162.0], [99.1, 3162.0], [99.2, 3162.0], [99.3, 3162.0], [99.4, 3162.0], [99.5, 3162.0], [99.6, 3162.0], [99.7, 3162.0], [99.8, 3162.0], [99.9, 3162.0]], "isOverall": false, "label": "Get All Projects", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 2.0, "minX": 2400.0, "maxY": 11.0, "series": [{"data": [[2400.0, 2.0], [2500.0, 4.0], [2600.0, 4.0], [2800.0, 6.0], [2700.0, 5.0], [2900.0, 9.0], [3000.0, 9.0], [3100.0, 11.0]], "isOverall": false, "label": "Get All Projects", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 3100.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 26.580000000000005, "minX": 1.6195197E12, "maxY": 26.580000000000005, "series": [{"data": [[1.6195197E12, 26.580000000000005]], "isOverall": false, "label": "CT Benchmark:  Queries", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6195197E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 2571.0, "minX": 1.0, "maxY": 3154.0, "series": [{"data": [[33.0, 3002.0], [32.0, 3059.0], [2.0, 2856.0], [36.0, 2717.6666666666665], [39.0, 2996.0], [38.0, 2940.0], [41.0, 2755.0], [44.0, 2713.6666666666665], [47.0, 2713.0], [46.0, 2725.0], [50.0, 2677.0], [7.0, 3056.0], [9.0, 3047.0], [11.0, 2990.0], [12.0, 3060.0], [13.0, 3154.0], [14.0, 3043.5], [15.0, 3132.3333333333335], [16.0, 2944.0], [1.0, 2721.0], [18.0, 2832.5], [19.0, 2729.0], [21.0, 2983.0], [22.0, 3114.0], [23.0, 2571.0], [24.0, 3061.0], [26.0, 3101.0], [27.0, 2638.0], [29.0, 3088.0], [30.0, 3081.0], [31.0, 3020.0]], "isOverall": false, "label": "Get All Projects", "isController": false}, {"data": [[26.580000000000005, 2901.62]], "isOverall": false, "label": "Get All Projects-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 50.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 257.5, "minX": 1.6195197E12, "maxY": 443.3333333333333, "series": [{"data": [[1.6195197E12, 443.3333333333333]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.6195197E12, 257.5]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6195197E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 2901.62, "minX": 1.6195197E12, "maxY": 2901.62, "series": [{"data": [[1.6195197E12, 2901.62]], "isOverall": false, "label": "Get All Projects", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6195197E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 2901.359999999999, "minX": 1.6195197E12, "maxY": 2901.359999999999, "series": [{"data": [[1.6195197E12, 2901.359999999999]], "isOverall": false, "label": "Get All Projects", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6195197E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 2095.42, "minX": 1.6195197E12, "maxY": 2095.42, "series": [{"data": [[1.6195197E12, 2095.42]], "isOverall": false, "label": "Get All Projects", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6195197E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 2457.0, "minX": 1.6195197E12, "maxY": 3162.0, "series": [{"data": [[1.6195197E12, 3162.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.6195197E12, 3153.7]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.6195197E12, 3162.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.6195197E12, 3158.9]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.6195197E12, 2457.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.6195197E12, 2949.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6195197E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 2949.0, "minX": 50.0, "maxY": 2949.0, "series": [{"data": [[50.0, 2949.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 50.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 2949.0, "minX": 50.0, "maxY": 2949.0, "series": [{"data": [[50.0, 2949.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 50.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.8333333333333334, "minX": 1.6195197E12, "maxY": 0.8333333333333334, "series": [{"data": [[1.6195197E12, 0.8333333333333334]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6195197E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.8333333333333334, "minX": 1.6195197E12, "maxY": 0.8333333333333334, "series": [{"data": [[1.6195197E12, 0.8333333333333334]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6195197E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.8333333333333334, "minX": 1.6195197E12, "maxY": 0.8333333333333334, "series": [{"data": [[1.6195197E12, 0.8333333333333334]], "isOverall": false, "label": "Get All Projects-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6195197E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.8333333333333334, "minX": 1.6195197E12, "maxY": 0.8333333333333334, "series": [{"data": [[1.6195197E12, 0.8333333333333334]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6195197E12, "title": "Total Transactions Per Second"}},
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


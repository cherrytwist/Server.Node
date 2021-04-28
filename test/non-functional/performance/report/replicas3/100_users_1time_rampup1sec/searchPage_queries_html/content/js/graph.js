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
        data: {"result": {"minY": 5422.0, "minX": 0.0, "maxY": 8272.0, "series": [{"data": [[0.0, 5422.0], [0.1, 5422.0], [0.2, 5422.0], [0.3, 5422.0], [0.4, 5422.0], [0.5, 5422.0], [0.6, 5422.0], [0.7, 5422.0], [0.8, 5422.0], [0.9, 5422.0], [1.0, 5562.0], [1.1, 5562.0], [1.2, 5562.0], [1.3, 5562.0], [1.4, 5562.0], [1.5, 5562.0], [1.6, 5562.0], [1.7, 5562.0], [1.8, 5562.0], [1.9, 5562.0], [2.0, 5570.0], [2.1, 5570.0], [2.2, 5570.0], [2.3, 5570.0], [2.4, 5570.0], [2.5, 5570.0], [2.6, 5570.0], [2.7, 5570.0], [2.8, 5570.0], [2.9, 5570.0], [3.0, 5587.0], [3.1, 5587.0], [3.2, 5587.0], [3.3, 5587.0], [3.4, 5587.0], [3.5, 5587.0], [3.6, 5587.0], [3.7, 5587.0], [3.8, 5587.0], [3.9, 5587.0], [4.0, 5622.0], [4.1, 5622.0], [4.2, 5622.0], [4.3, 5622.0], [4.4, 5622.0], [4.5, 5622.0], [4.6, 5622.0], [4.7, 5622.0], [4.8, 5622.0], [4.9, 5622.0], [5.0, 5622.0], [5.1, 5622.0], [5.2, 5622.0], [5.3, 5622.0], [5.4, 5622.0], [5.5, 5622.0], [5.6, 5622.0], [5.7, 5622.0], [5.8, 5622.0], [5.9, 5622.0], [6.0, 5701.0], [6.1, 5701.0], [6.2, 5701.0], [6.3, 5701.0], [6.4, 5701.0], [6.5, 5701.0], [6.6, 5701.0], [6.7, 5701.0], [6.8, 5701.0], [6.9, 5701.0], [7.0, 5716.0], [7.1, 5716.0], [7.2, 5716.0], [7.3, 5716.0], [7.4, 5716.0], [7.5, 5716.0], [7.6, 5716.0], [7.7, 5716.0], [7.8, 5716.0], [7.9, 5716.0], [8.0, 5762.0], [8.1, 5762.0], [8.2, 5762.0], [8.3, 5762.0], [8.4, 5762.0], [8.5, 5762.0], [8.6, 5762.0], [8.7, 5762.0], [8.8, 5762.0], [8.9, 5762.0], [9.0, 5770.0], [9.1, 5770.0], [9.2, 5770.0], [9.3, 5770.0], [9.4, 5770.0], [9.5, 5770.0], [9.6, 5770.0], [9.7, 5770.0], [9.8, 5770.0], [9.9, 5770.0], [10.0, 5786.0], [10.1, 5786.0], [10.2, 5786.0], [10.3, 5786.0], [10.4, 5786.0], [10.5, 5786.0], [10.6, 5786.0], [10.7, 5786.0], [10.8, 5786.0], [10.9, 5786.0], [11.0, 5812.0], [11.1, 5812.0], [11.2, 5812.0], [11.3, 5812.0], [11.4, 5812.0], [11.5, 5812.0], [11.6, 5812.0], [11.7, 5812.0], [11.8, 5812.0], [11.9, 5812.0], [12.0, 5815.0], [12.1, 5815.0], [12.2, 5815.0], [12.3, 5815.0], [12.4, 5815.0], [12.5, 5815.0], [12.6, 5815.0], [12.7, 5815.0], [12.8, 5815.0], [12.9, 5815.0], [13.0, 5824.0], [13.1, 5824.0], [13.2, 5824.0], [13.3, 5824.0], [13.4, 5824.0], [13.5, 5824.0], [13.6, 5824.0], [13.7, 5824.0], [13.8, 5824.0], [13.9, 5824.0], [14.0, 5831.0], [14.1, 5831.0], [14.2, 5831.0], [14.3, 5831.0], [14.4, 5831.0], [14.5, 5831.0], [14.6, 5831.0], [14.7, 5831.0], [14.8, 5831.0], [14.9, 5831.0], [15.0, 5859.0], [15.1, 5859.0], [15.2, 5859.0], [15.3, 5859.0], [15.4, 5859.0], [15.5, 5859.0], [15.6, 5859.0], [15.7, 5859.0], [15.8, 5859.0], [15.9, 5859.0], [16.0, 5866.0], [16.1, 5866.0], [16.2, 5866.0], [16.3, 5866.0], [16.4, 5866.0], [16.5, 5866.0], [16.6, 5866.0], [16.7, 5866.0], [16.8, 5866.0], [16.9, 5866.0], [17.0, 5868.0], [17.1, 5868.0], [17.2, 5868.0], [17.3, 5868.0], [17.4, 5868.0], [17.5, 5868.0], [17.6, 5868.0], [17.7, 5868.0], [17.8, 5868.0], [17.9, 5868.0], [18.0, 5877.0], [18.1, 5877.0], [18.2, 5877.0], [18.3, 5877.0], [18.4, 5877.0], [18.5, 5877.0], [18.6, 5877.0], [18.7, 5877.0], [18.8, 5877.0], [18.9, 5877.0], [19.0, 5910.0], [19.1, 5910.0], [19.2, 5910.0], [19.3, 5910.0], [19.4, 5910.0], [19.5, 5910.0], [19.6, 5910.0], [19.7, 5910.0], [19.8, 5910.0], [19.9, 5910.0], [20.0, 5922.0], [20.1, 5922.0], [20.2, 5922.0], [20.3, 5922.0], [20.4, 5922.0], [20.5, 5922.0], [20.6, 5922.0], [20.7, 5922.0], [20.8, 5922.0], [20.9, 5922.0], [21.0, 5923.0], [21.1, 5923.0], [21.2, 5923.0], [21.3, 5923.0], [21.4, 5923.0], [21.5, 5923.0], [21.6, 5923.0], [21.7, 5923.0], [21.8, 5923.0], [21.9, 5923.0], [22.0, 5939.0], [22.1, 5939.0], [22.2, 5939.0], [22.3, 5939.0], [22.4, 5939.0], [22.5, 5939.0], [22.6, 5939.0], [22.7, 5939.0], [22.8, 5939.0], [22.9, 5939.0], [23.0, 5945.0], [23.1, 5945.0], [23.2, 5945.0], [23.3, 5945.0], [23.4, 5945.0], [23.5, 5945.0], [23.6, 5945.0], [23.7, 5945.0], [23.8, 5945.0], [23.9, 5945.0], [24.0, 5962.0], [24.1, 5962.0], [24.2, 5962.0], [24.3, 5962.0], [24.4, 5962.0], [24.5, 5962.0], [24.6, 5962.0], [24.7, 5962.0], [24.8, 5962.0], [24.9, 5962.0], [25.0, 5963.0], [25.1, 5963.0], [25.2, 5963.0], [25.3, 5963.0], [25.4, 5963.0], [25.5, 5963.0], [25.6, 5963.0], [25.7, 5963.0], [25.8, 5963.0], [25.9, 5963.0], [26.0, 5976.0], [26.1, 5976.0], [26.2, 5976.0], [26.3, 5976.0], [26.4, 5976.0], [26.5, 5976.0], [26.6, 5976.0], [26.7, 5976.0], [26.8, 5976.0], [26.9, 5976.0], [27.0, 5978.0], [27.1, 5978.0], [27.2, 5978.0], [27.3, 5978.0], [27.4, 5978.0], [27.5, 5978.0], [27.6, 5978.0], [27.7, 5978.0], [27.8, 5978.0], [27.9, 5978.0], [28.0, 6007.0], [28.1, 6007.0], [28.2, 6007.0], [28.3, 6007.0], [28.4, 6007.0], [28.5, 6007.0], [28.6, 6007.0], [28.7, 6007.0], [28.8, 6007.0], [28.9, 6007.0], [29.0, 6018.0], [29.1, 6018.0], [29.2, 6018.0], [29.3, 6018.0], [29.4, 6018.0], [29.5, 6018.0], [29.6, 6018.0], [29.7, 6018.0], [29.8, 6018.0], [29.9, 6018.0], [30.0, 6032.0], [30.1, 6032.0], [30.2, 6032.0], [30.3, 6032.0], [30.4, 6032.0], [30.5, 6032.0], [30.6, 6032.0], [30.7, 6032.0], [30.8, 6032.0], [30.9, 6032.0], [31.0, 6042.0], [31.1, 6042.0], [31.2, 6042.0], [31.3, 6042.0], [31.4, 6042.0], [31.5, 6042.0], [31.6, 6042.0], [31.7, 6042.0], [31.8, 6042.0], [31.9, 6042.0], [32.0, 6053.0], [32.1, 6053.0], [32.2, 6053.0], [32.3, 6053.0], [32.4, 6053.0], [32.5, 6053.0], [32.6, 6053.0], [32.7, 6053.0], [32.8, 6053.0], [32.9, 6053.0], [33.0, 6068.0], [33.1, 6068.0], [33.2, 6068.0], [33.3, 6068.0], [33.4, 6068.0], [33.5, 6068.0], [33.6, 6068.0], [33.7, 6068.0], [33.8, 6068.0], [33.9, 6068.0], [34.0, 6077.0], [34.1, 6077.0], [34.2, 6077.0], [34.3, 6077.0], [34.4, 6077.0], [34.5, 6077.0], [34.6, 6077.0], [34.7, 6077.0], [34.8, 6077.0], [34.9, 6077.0], [35.0, 6156.0], [35.1, 6156.0], [35.2, 6156.0], [35.3, 6156.0], [35.4, 6156.0], [35.5, 6156.0], [35.6, 6156.0], [35.7, 6156.0], [35.8, 6156.0], [35.9, 6156.0], [36.0, 6340.0], [36.1, 6340.0], [36.2, 6340.0], [36.3, 6340.0], [36.4, 6340.0], [36.5, 6340.0], [36.6, 6340.0], [36.7, 6340.0], [36.8, 6340.0], [36.9, 6340.0], [37.0, 6388.0], [37.1, 6388.0], [37.2, 6388.0], [37.3, 6388.0], [37.4, 6388.0], [37.5, 6388.0], [37.6, 6388.0], [37.7, 6388.0], [37.8, 6388.0], [37.9, 6388.0], [38.0, 6453.0], [38.1, 6453.0], [38.2, 6453.0], [38.3, 6453.0], [38.4, 6453.0], [38.5, 6453.0], [38.6, 6453.0], [38.7, 6453.0], [38.8, 6453.0], [38.9, 6453.0], [39.0, 6473.0], [39.1, 6473.0], [39.2, 6473.0], [39.3, 6473.0], [39.4, 6473.0], [39.5, 6473.0], [39.6, 6473.0], [39.7, 6473.0], [39.8, 6473.0], [39.9, 6473.0], [40.0, 6674.0], [40.1, 6674.0], [40.2, 6674.0], [40.3, 6674.0], [40.4, 6674.0], [40.5, 6674.0], [40.6, 6674.0], [40.7, 6674.0], [40.8, 6674.0], [40.9, 6674.0], [41.0, 6675.0], [41.1, 6675.0], [41.2, 6675.0], [41.3, 6675.0], [41.4, 6675.0], [41.5, 6675.0], [41.6, 6675.0], [41.7, 6675.0], [41.8, 6675.0], [41.9, 6675.0], [42.0, 6722.0], [42.1, 6722.0], [42.2, 6722.0], [42.3, 6722.0], [42.4, 6722.0], [42.5, 6722.0], [42.6, 6722.0], [42.7, 6722.0], [42.8, 6722.0], [42.9, 6722.0], [43.0, 6730.0], [43.1, 6730.0], [43.2, 6730.0], [43.3, 6730.0], [43.4, 6730.0], [43.5, 6730.0], [43.6, 6730.0], [43.7, 6730.0], [43.8, 6730.0], [43.9, 6730.0], [44.0, 6747.0], [44.1, 6747.0], [44.2, 6747.0], [44.3, 6747.0], [44.4, 6747.0], [44.5, 6747.0], [44.6, 6747.0], [44.7, 6747.0], [44.8, 6747.0], [44.9, 6747.0], [45.0, 6837.0], [45.1, 6837.0], [45.2, 6837.0], [45.3, 6837.0], [45.4, 6837.0], [45.5, 6837.0], [45.6, 6837.0], [45.7, 6837.0], [45.8, 6837.0], [45.9, 6837.0], [46.0, 6841.0], [46.1, 6841.0], [46.2, 6841.0], [46.3, 6841.0], [46.4, 6841.0], [46.5, 6841.0], [46.6, 6841.0], [46.7, 6841.0], [46.8, 6841.0], [46.9, 6841.0], [47.0, 6870.0], [47.1, 6870.0], [47.2, 6870.0], [47.3, 6870.0], [47.4, 6870.0], [47.5, 6870.0], [47.6, 6870.0], [47.7, 6870.0], [47.8, 6870.0], [47.9, 6870.0], [48.0, 6917.0], [48.1, 6917.0], [48.2, 6917.0], [48.3, 6917.0], [48.4, 6917.0], [48.5, 6917.0], [48.6, 6917.0], [48.7, 6917.0], [48.8, 6917.0], [48.9, 6917.0], [49.0, 6979.0], [49.1, 6979.0], [49.2, 6979.0], [49.3, 6979.0], [49.4, 6979.0], [49.5, 6979.0], [49.6, 6979.0], [49.7, 6979.0], [49.8, 6979.0], [49.9, 6979.0], [50.0, 7014.0], [50.1, 7014.0], [50.2, 7014.0], [50.3, 7014.0], [50.4, 7014.0], [50.5, 7014.0], [50.6, 7014.0], [50.7, 7014.0], [50.8, 7014.0], [50.9, 7014.0], [51.0, 7043.0], [51.1, 7043.0], [51.2, 7043.0], [51.3, 7043.0], [51.4, 7043.0], [51.5, 7043.0], [51.6, 7043.0], [51.7, 7043.0], [51.8, 7043.0], [51.9, 7043.0], [52.0, 7139.0], [52.1, 7139.0], [52.2, 7139.0], [52.3, 7139.0], [52.4, 7139.0], [52.5, 7139.0], [52.6, 7139.0], [52.7, 7139.0], [52.8, 7139.0], [52.9, 7139.0], [53.0, 7170.0], [53.1, 7170.0], [53.2, 7170.0], [53.3, 7170.0], [53.4, 7170.0], [53.5, 7170.0], [53.6, 7170.0], [53.7, 7170.0], [53.8, 7170.0], [53.9, 7170.0], [54.0, 7185.0], [54.1, 7185.0], [54.2, 7185.0], [54.3, 7185.0], [54.4, 7185.0], [54.5, 7185.0], [54.6, 7185.0], [54.7, 7185.0], [54.8, 7185.0], [54.9, 7185.0], [55.0, 7238.0], [55.1, 7238.0], [55.2, 7238.0], [55.3, 7238.0], [55.4, 7238.0], [55.5, 7238.0], [55.6, 7238.0], [55.7, 7238.0], [55.8, 7238.0], [55.9, 7238.0], [56.0, 7263.0], [56.1, 7263.0], [56.2, 7263.0], [56.3, 7263.0], [56.4, 7263.0], [56.5, 7263.0], [56.6, 7263.0], [56.7, 7263.0], [56.8, 7263.0], [56.9, 7263.0], [57.0, 7271.0], [57.1, 7271.0], [57.2, 7271.0], [57.3, 7271.0], [57.4, 7271.0], [57.5, 7271.0], [57.6, 7271.0], [57.7, 7271.0], [57.8, 7271.0], [57.9, 7271.0], [58.0, 7326.0], [58.1, 7326.0], [58.2, 7326.0], [58.3, 7326.0], [58.4, 7326.0], [58.5, 7326.0], [58.6, 7326.0], [58.7, 7326.0], [58.8, 7326.0], [58.9, 7326.0], [59.0, 7361.0], [59.1, 7361.0], [59.2, 7361.0], [59.3, 7361.0], [59.4, 7361.0], [59.5, 7361.0], [59.6, 7361.0], [59.7, 7361.0], [59.8, 7361.0], [59.9, 7361.0], [60.0, 7381.0], [60.1, 7381.0], [60.2, 7381.0], [60.3, 7381.0], [60.4, 7381.0], [60.5, 7381.0], [60.6, 7381.0], [60.7, 7381.0], [60.8, 7381.0], [60.9, 7381.0], [61.0, 7393.0], [61.1, 7393.0], [61.2, 7393.0], [61.3, 7393.0], [61.4, 7393.0], [61.5, 7393.0], [61.6, 7393.0], [61.7, 7393.0], [61.8, 7393.0], [61.9, 7393.0], [62.0, 7439.0], [62.1, 7439.0], [62.2, 7439.0], [62.3, 7439.0], [62.4, 7439.0], [62.5, 7439.0], [62.6, 7439.0], [62.7, 7439.0], [62.8, 7439.0], [62.9, 7439.0], [63.0, 7448.0], [63.1, 7448.0], [63.2, 7448.0], [63.3, 7448.0], [63.4, 7448.0], [63.5, 7448.0], [63.6, 7448.0], [63.7, 7448.0], [63.8, 7448.0], [63.9, 7448.0], [64.0, 7503.0], [64.1, 7503.0], [64.2, 7503.0], [64.3, 7503.0], [64.4, 7503.0], [64.5, 7503.0], [64.6, 7503.0], [64.7, 7503.0], [64.8, 7503.0], [64.9, 7503.0], [65.0, 7581.0], [65.1, 7581.0], [65.2, 7581.0], [65.3, 7581.0], [65.4, 7581.0], [65.5, 7581.0], [65.6, 7581.0], [65.7, 7581.0], [65.8, 7581.0], [65.9, 7581.0], [66.0, 7585.0], [66.1, 7585.0], [66.2, 7585.0], [66.3, 7585.0], [66.4, 7585.0], [66.5, 7585.0], [66.6, 7585.0], [66.7, 7585.0], [66.8, 7585.0], [66.9, 7585.0], [67.0, 7608.0], [67.1, 7608.0], [67.2, 7608.0], [67.3, 7608.0], [67.4, 7608.0], [67.5, 7608.0], [67.6, 7608.0], [67.7, 7608.0], [67.8, 7608.0], [67.9, 7608.0], [68.0, 7645.0], [68.1, 7645.0], [68.2, 7645.0], [68.3, 7645.0], [68.4, 7645.0], [68.5, 7645.0], [68.6, 7645.0], [68.7, 7645.0], [68.8, 7645.0], [68.9, 7645.0], [69.0, 7665.0], [69.1, 7665.0], [69.2, 7665.0], [69.3, 7665.0], [69.4, 7665.0], [69.5, 7665.0], [69.6, 7665.0], [69.7, 7665.0], [69.8, 7665.0], [69.9, 7665.0], [70.0, 7739.0], [70.1, 7739.0], [70.2, 7739.0], [70.3, 7739.0], [70.4, 7739.0], [70.5, 7739.0], [70.6, 7739.0], [70.7, 7739.0], [70.8, 7739.0], [70.9, 7739.0], [71.0, 7760.0], [71.1, 7760.0], [71.2, 7760.0], [71.3, 7760.0], [71.4, 7760.0], [71.5, 7760.0], [71.6, 7760.0], [71.7, 7760.0], [71.8, 7760.0], [71.9, 7760.0], [72.0, 7787.0], [72.1, 7787.0], [72.2, 7787.0], [72.3, 7787.0], [72.4, 7787.0], [72.5, 7787.0], [72.6, 7787.0], [72.7, 7787.0], [72.8, 7787.0], [72.9, 7787.0], [73.0, 7815.0], [73.1, 7815.0], [73.2, 7815.0], [73.3, 7815.0], [73.4, 7815.0], [73.5, 7815.0], [73.6, 7815.0], [73.7, 7815.0], [73.8, 7815.0], [73.9, 7815.0], [74.0, 7821.0], [74.1, 7821.0], [74.2, 7821.0], [74.3, 7821.0], [74.4, 7821.0], [74.5, 7821.0], [74.6, 7821.0], [74.7, 7821.0], [74.8, 7821.0], [74.9, 7821.0], [75.0, 7851.0], [75.1, 7851.0], [75.2, 7851.0], [75.3, 7851.0], [75.4, 7851.0], [75.5, 7851.0], [75.6, 7851.0], [75.7, 7851.0], [75.8, 7851.0], [75.9, 7851.0], [76.0, 7890.0], [76.1, 7890.0], [76.2, 7890.0], [76.3, 7890.0], [76.4, 7890.0], [76.5, 7890.0], [76.6, 7890.0], [76.7, 7890.0], [76.8, 7890.0], [76.9, 7890.0], [77.0, 7903.0], [77.1, 7903.0], [77.2, 7903.0], [77.3, 7903.0], [77.4, 7903.0], [77.5, 7903.0], [77.6, 7903.0], [77.7, 7903.0], [77.8, 7903.0], [77.9, 7903.0], [78.0, 7907.0], [78.1, 7907.0], [78.2, 7907.0], [78.3, 7907.0], [78.4, 7907.0], [78.5, 7907.0], [78.6, 7907.0], [78.7, 7907.0], [78.8, 7907.0], [78.9, 7907.0], [79.0, 7934.0], [79.1, 7934.0], [79.2, 7934.0], [79.3, 7934.0], [79.4, 7934.0], [79.5, 7934.0], [79.6, 7934.0], [79.7, 7934.0], [79.8, 7934.0], [79.9, 7934.0], [80.0, 7941.0], [80.1, 7941.0], [80.2, 7941.0], [80.3, 7941.0], [80.4, 7941.0], [80.5, 7941.0], [80.6, 7941.0], [80.7, 7941.0], [80.8, 7941.0], [80.9, 7941.0], [81.0, 7958.0], [81.1, 7958.0], [81.2, 7958.0], [81.3, 7958.0], [81.4, 7958.0], [81.5, 7958.0], [81.6, 7958.0], [81.7, 7958.0], [81.8, 7958.0], [81.9, 7958.0], [82.0, 7989.0], [82.1, 7989.0], [82.2, 7989.0], [82.3, 7989.0], [82.4, 7989.0], [82.5, 7989.0], [82.6, 7989.0], [82.7, 7989.0], [82.8, 7989.0], [82.9, 7989.0], [83.0, 7989.0], [83.1, 7989.0], [83.2, 7989.0], [83.3, 7989.0], [83.4, 7989.0], [83.5, 7989.0], [83.6, 7989.0], [83.7, 7989.0], [83.8, 7989.0], [83.9, 7989.0], [84.0, 7992.0], [84.1, 7992.0], [84.2, 7992.0], [84.3, 7992.0], [84.4, 7992.0], [84.5, 7992.0], [84.6, 7992.0], [84.7, 7992.0], [84.8, 7992.0], [84.9, 7992.0], [85.0, 7994.0], [85.1, 7994.0], [85.2, 7994.0], [85.3, 7994.0], [85.4, 7994.0], [85.5, 7994.0], [85.6, 7994.0], [85.7, 7994.0], [85.8, 7994.0], [85.9, 7994.0], [86.0, 8018.0], [86.1, 8018.0], [86.2, 8018.0], [86.3, 8018.0], [86.4, 8018.0], [86.5, 8018.0], [86.6, 8018.0], [86.7, 8018.0], [86.8, 8018.0], [86.9, 8018.0], [87.0, 8020.0], [87.1, 8020.0], [87.2, 8020.0], [87.3, 8020.0], [87.4, 8020.0], [87.5, 8020.0], [87.6, 8020.0], [87.7, 8020.0], [87.8, 8020.0], [87.9, 8020.0], [88.0, 8047.0], [88.1, 8047.0], [88.2, 8047.0], [88.3, 8047.0], [88.4, 8047.0], [88.5, 8047.0], [88.6, 8047.0], [88.7, 8047.0], [88.8, 8047.0], [88.9, 8047.0], [89.0, 8050.0], [89.1, 8050.0], [89.2, 8050.0], [89.3, 8050.0], [89.4, 8050.0], [89.5, 8050.0], [89.6, 8050.0], [89.7, 8050.0], [89.8, 8050.0], [89.9, 8050.0], [90.0, 8070.0], [90.1, 8070.0], [90.2, 8070.0], [90.3, 8070.0], [90.4, 8070.0], [90.5, 8070.0], [90.6, 8070.0], [90.7, 8070.0], [90.8, 8070.0], [90.9, 8070.0], [91.0, 8109.0], [91.1, 8109.0], [91.2, 8109.0], [91.3, 8109.0], [91.4, 8109.0], [91.5, 8109.0], [91.6, 8109.0], [91.7, 8109.0], [91.8, 8109.0], [91.9, 8109.0], [92.0, 8123.0], [92.1, 8123.0], [92.2, 8123.0], [92.3, 8123.0], [92.4, 8123.0], [92.5, 8123.0], [92.6, 8123.0], [92.7, 8123.0], [92.8, 8123.0], [92.9, 8123.0], [93.0, 8139.0], [93.1, 8139.0], [93.2, 8139.0], [93.3, 8139.0], [93.4, 8139.0], [93.5, 8139.0], [93.6, 8139.0], [93.7, 8139.0], [93.8, 8139.0], [93.9, 8139.0], [94.0, 8159.0], [94.1, 8159.0], [94.2, 8159.0], [94.3, 8159.0], [94.4, 8159.0], [94.5, 8159.0], [94.6, 8159.0], [94.7, 8159.0], [94.8, 8159.0], [94.9, 8159.0], [95.0, 8160.0], [95.1, 8160.0], [95.2, 8160.0], [95.3, 8160.0], [95.4, 8160.0], [95.5, 8160.0], [95.6, 8160.0], [95.7, 8160.0], [95.8, 8160.0], [95.9, 8160.0], [96.0, 8216.0], [96.1, 8216.0], [96.2, 8216.0], [96.3, 8216.0], [96.4, 8216.0], [96.5, 8216.0], [96.6, 8216.0], [96.7, 8216.0], [96.8, 8216.0], [96.9, 8216.0], [97.0, 8253.0], [97.1, 8253.0], [97.2, 8253.0], [97.3, 8253.0], [97.4, 8253.0], [97.5, 8253.0], [97.6, 8253.0], [97.7, 8253.0], [97.8, 8253.0], [97.9, 8253.0], [98.0, 8265.0], [98.1, 8265.0], [98.2, 8265.0], [98.3, 8265.0], [98.4, 8265.0], [98.5, 8265.0], [98.6, 8265.0], [98.7, 8265.0], [98.8, 8265.0], [98.9, 8265.0], [99.0, 8272.0], [99.1, 8272.0], [99.2, 8272.0], [99.3, 8272.0], [99.4, 8272.0], [99.5, 8272.0], [99.6, 8272.0], [99.7, 8272.0], [99.8, 8272.0], [99.9, 8272.0]], "isOverall": false, "label": "Search", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 5400.0, "maxY": 9.0, "series": [{"data": [[8200.0, 4.0], [5500.0, 3.0], [5400.0, 1.0], [5600.0, 2.0], [5700.0, 5.0], [5800.0, 8.0], [5900.0, 9.0], [6000.0, 7.0], [6100.0, 1.0], [6300.0, 2.0], [6400.0, 2.0], [6600.0, 2.0], [6800.0, 3.0], [6700.0, 3.0], [6900.0, 2.0], [7000.0, 2.0], [7100.0, 3.0], [7200.0, 3.0], [7300.0, 4.0], [7400.0, 2.0], [7500.0, 3.0], [7600.0, 3.0], [7800.0, 4.0], [7900.0, 9.0], [7700.0, 3.0], [8000.0, 5.0], [8100.0, 5.0]], "isOverall": false, "label": "Search", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 8200.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 100.0, "minX": 2.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 100.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 100.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 50.55000000000002, "minX": 1.61959866E12, "maxY": 50.55000000000002, "series": [{"data": [[1.61959866E12, 50.55000000000002]], "isOverall": false, "label": "CT Benchmark:  Queries - Search page", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.61959866E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 5422.0, "minX": 1.0, "maxY": 8272.0, "series": [{"data": [[2.0, 8253.0], [4.0, 8212.5], [5.0, 8123.0], [6.0, 8216.0], [7.0, 7989.0], [8.0, 7992.0], [9.0, 7739.0], [10.0, 7989.0], [11.0, 7934.0], [12.0, 8159.0], [13.0, 8070.0], [14.0, 8139.0], [15.0, 8109.0], [16.0, 7903.0], [17.0, 7815.0], [18.0, 7645.0], [19.0, 7787.0], [20.0, 8050.0], [21.0, 8047.0], [22.0, 8018.0], [23.0, 7665.0], [24.0, 8020.0], [25.0, 7994.0], [26.0, 7851.0], [27.0, 7760.0], [28.0, 7958.0], [29.0, 7941.0], [30.0, 7821.0], [31.0, 7907.0], [33.0, 7581.0], [32.0, 7890.0], [35.0, 7585.0], [34.0, 7608.0], [37.0, 7014.0], [36.0, 7393.0], [39.0, 7503.0], [38.0, 7326.0], [41.0, 6979.0], [40.0, 7238.0], [43.0, 7439.0], [42.0, 7448.0], [45.0, 7381.0], [44.0, 7271.0], [47.0, 7139.0], [49.0, 7263.0], [48.0, 6837.0], [51.0, 7185.0], [50.0, 7139.0], [53.0, 6747.0], [52.0, 7170.0], [55.0, 6674.0], [54.0, 6722.0], [57.0, 7043.0], [56.0, 6841.0], [59.0, 6473.0], [58.0, 6730.0], [61.0, 6340.0], [60.0, 6870.0], [63.0, 6453.0], [62.0, 6675.0], [67.0, 5866.0], [66.0, 6068.0], [65.0, 6388.0], [64.0, 5963.0], [71.0, 6156.0], [70.0, 5812.0], [69.0, 6053.0], [68.0, 5962.0], [75.0, 5762.0], [74.0, 5622.0], [73.0, 6042.0], [72.0, 5868.0], [79.0, 5622.0], [78.0, 5770.0], [77.0, 5786.0], [76.0, 5976.0], [82.0, 5877.0], [81.0, 5922.0], [80.0, 6077.0], [87.0, 5587.0], [86.0, 6007.0], [85.0, 6018.0], [84.0, 5874.0], [91.0, 5939.0], [90.0, 5562.0], [89.0, 5961.5], [95.0, 5824.0], [94.0, 5815.0], [93.0, 5910.0], [92.0, 5923.0], [98.0, 5831.0], [97.0, 5422.0], [96.0, 5859.0], [100.0, 5635.5], [1.0, 8272.0]], "isOverall": false, "label": "Search", "isController": false}, {"data": [[50.55000000000002, 6919.180000000002]], "isOverall": false, "label": "Search-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 1025.0, "minX": 1.61959866E12, "maxY": 64890.0, "series": [{"data": [[1.61959866E12, 64890.0]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.61959866E12, 1025.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.61959866E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 6919.180000000002, "minX": 1.61959866E12, "maxY": 6919.180000000002, "series": [{"data": [[1.61959866E12, 6919.180000000002]], "isOverall": false, "label": "Search", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.61959866E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 6860.220000000001, "minX": 1.61959866E12, "maxY": 6860.220000000001, "series": [{"data": [[1.61959866E12, 6860.220000000001]], "isOverall": false, "label": "Search", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.61959866E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 3073.9000000000005, "minX": 1.61959866E12, "maxY": 3073.9000000000005, "series": [{"data": [[1.61959866E12, 3073.9000000000005]], "isOverall": false, "label": "Search", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.61959866E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 5422.0, "minX": 1.61959866E12, "maxY": 8272.0, "series": [{"data": [[1.61959866E12, 8272.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.61959866E12, 8068.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.61959866E12, 8271.93]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.61959866E12, 8159.95]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.61959866E12, 5422.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.61959866E12, 6996.5]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.61959866E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 5831.0, "minX": 12.0, "maxY": 8141.0, "series": [{"data": [[20.0, 6364.0], [41.0, 7608.0], [12.0, 8141.0], [27.0, 5831.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 41.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 5771.0, "minX": 12.0, "maxY": 8063.0, "series": [{"data": [[20.0, 6312.5], [41.0, 7552.0], [12.0, 8063.0], [27.0, 5771.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 41.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 1.6666666666666667, "minX": 1.61959866E12, "maxY": 1.6666666666666667, "series": [{"data": [[1.61959866E12, 1.6666666666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.61959866E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 1.6666666666666667, "minX": 1.61959866E12, "maxY": 1.6666666666666667, "series": [{"data": [[1.61959866E12, 1.6666666666666667]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.61959866E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 1.6666666666666667, "minX": 1.61959866E12, "maxY": 1.6666666666666667, "series": [{"data": [[1.61959866E12, 1.6666666666666667]], "isOverall": false, "label": "Search-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.61959866E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 1.6666666666666667, "minX": 1.61959866E12, "maxY": 1.6666666666666667, "series": [{"data": [[1.61959866E12, 1.6666666666666667]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.61959866E12, "title": "Total Transactions Per Second"}},
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


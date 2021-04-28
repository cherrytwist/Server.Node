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
        data: {"result": {"minY": 6441.0, "minX": 0.0, "maxY": 16682.0, "series": [{"data": [[0.0, 6441.0], [0.1, 6441.0], [0.2, 6441.0], [0.3, 6441.0], [0.4, 6441.0], [0.5, 6541.0], [0.6, 6541.0], [0.7, 6541.0], [0.8, 6541.0], [0.9, 6541.0], [1.0, 6555.0], [1.1, 6555.0], [1.2, 6555.0], [1.3, 6555.0], [1.4, 6555.0], [1.5, 6603.0], [1.6, 6603.0], [1.7, 6603.0], [1.8, 6603.0], [1.9, 6603.0], [2.0, 6641.0], [2.1, 6641.0], [2.2, 6641.0], [2.3, 6641.0], [2.4, 6641.0], [2.5, 6645.0], [2.6, 6645.0], [2.7, 6645.0], [2.8, 6645.0], [2.9, 6645.0], [3.0, 6653.0], [3.1, 6653.0], [3.2, 6653.0], [3.3, 6653.0], [3.4, 6653.0], [3.5, 6755.0], [3.6, 6755.0], [3.7, 6755.0], [3.8, 6755.0], [3.9, 6755.0], [4.0, 6760.0], [4.1, 6760.0], [4.2, 6760.0], [4.3, 6760.0], [4.4, 6760.0], [4.5, 6795.0], [4.6, 6795.0], [4.7, 6795.0], [4.8, 6795.0], [4.9, 6795.0], [5.0, 6808.0], [5.1, 6808.0], [5.2, 6808.0], [5.3, 6808.0], [5.4, 6808.0], [5.5, 6818.0], [5.6, 6818.0], [5.7, 6818.0], [5.8, 6818.0], [5.9, 6818.0], [6.0, 6841.0], [6.1, 6841.0], [6.2, 6841.0], [6.3, 6841.0], [6.4, 6841.0], [6.5, 6844.0], [6.6, 6844.0], [6.7, 6844.0], [6.8, 6844.0], [6.9, 6844.0], [7.0, 6847.0], [7.1, 6847.0], [7.2, 6847.0], [7.3, 6847.0], [7.4, 6847.0], [7.5, 6853.0], [7.6, 6853.0], [7.7, 6853.0], [7.8, 6853.0], [7.9, 6853.0], [8.0, 6871.0], [8.1, 6871.0], [8.2, 6871.0], [8.3, 6871.0], [8.4, 6871.0], [8.5, 6879.0], [8.6, 6879.0], [8.7, 6879.0], [8.8, 6879.0], [8.9, 6879.0], [9.0, 6881.0], [9.1, 6881.0], [9.2, 6881.0], [9.3, 6881.0], [9.4, 6881.0], [9.5, 6905.0], [9.6, 6905.0], [9.7, 6905.0], [9.8, 6905.0], [9.9, 6905.0], [10.0, 6908.0], [10.1, 6908.0], [10.2, 6908.0], [10.3, 6908.0], [10.4, 6908.0], [10.5, 6956.0], [10.6, 6956.0], [10.7, 6956.0], [10.8, 6956.0], [10.9, 6956.0], [11.0, 6956.0], [11.1, 6956.0], [11.2, 6956.0], [11.3, 6956.0], [11.4, 6956.0], [11.5, 7004.0], [11.6, 7004.0], [11.7, 7004.0], [11.8, 7004.0], [11.9, 7004.0], [12.0, 7014.0], [12.1, 7014.0], [12.2, 7014.0], [12.3, 7014.0], [12.4, 7014.0], [12.5, 7023.0], [12.6, 7023.0], [12.7, 7023.0], [12.8, 7023.0], [12.9, 7023.0], [13.0, 7026.0], [13.1, 7026.0], [13.2, 7026.0], [13.3, 7026.0], [13.4, 7026.0], [13.5, 7074.0], [13.6, 7074.0], [13.7, 7074.0], [13.8, 7074.0], [13.9, 7074.0], [14.0, 7075.0], [14.1, 7075.0], [14.2, 7075.0], [14.3, 7075.0], [14.4, 7075.0], [14.5, 7093.0], [14.6, 7093.0], [14.7, 7093.0], [14.8, 7093.0], [14.9, 7093.0], [15.0, 7094.0], [15.1, 7094.0], [15.2, 7094.0], [15.3, 7094.0], [15.4, 7094.0], [15.5, 7101.0], [15.6, 7101.0], [15.7, 7101.0], [15.8, 7101.0], [15.9, 7101.0], [16.0, 7110.0], [16.1, 7110.0], [16.2, 7110.0], [16.3, 7110.0], [16.4, 7110.0], [16.5, 7110.0], [16.6, 7110.0], [16.7, 7110.0], [16.8, 7110.0], [16.9, 7110.0], [17.0, 7202.0], [17.1, 7202.0], [17.2, 7202.0], [17.3, 7202.0], [17.4, 7202.0], [17.5, 7208.0], [17.6, 7208.0], [17.7, 7208.0], [17.8, 7208.0], [17.9, 7208.0], [18.0, 7264.0], [18.1, 7264.0], [18.2, 7264.0], [18.3, 7264.0], [18.4, 7264.0], [18.5, 7267.0], [18.6, 7267.0], [18.7, 7267.0], [18.8, 7267.0], [18.9, 7267.0], [19.0, 7273.0], [19.1, 7273.0], [19.2, 7273.0], [19.3, 7273.0], [19.4, 7273.0], [19.5, 7276.0], [19.6, 7276.0], [19.7, 7276.0], [19.8, 7276.0], [19.9, 7276.0], [20.0, 7280.0], [20.1, 7280.0], [20.2, 7280.0], [20.3, 7280.0], [20.4, 7280.0], [20.5, 7294.0], [20.6, 7294.0], [20.7, 7294.0], [20.8, 7294.0], [20.9, 7294.0], [21.0, 7315.0], [21.1, 7315.0], [21.2, 7315.0], [21.3, 7315.0], [21.4, 7315.0], [21.5, 7318.0], [21.6, 7318.0], [21.7, 7318.0], [21.8, 7318.0], [21.9, 7318.0], [22.0, 7331.0], [22.1, 7331.0], [22.2, 7331.0], [22.3, 7331.0], [22.4, 7331.0], [22.5, 7368.0], [22.6, 7368.0], [22.7, 7368.0], [22.8, 7368.0], [22.9, 7368.0], [23.0, 7372.0], [23.1, 7372.0], [23.2, 7372.0], [23.3, 7372.0], [23.4, 7372.0], [23.5, 7518.0], [23.6, 7518.0], [23.7, 7518.0], [23.8, 7518.0], [23.9, 7518.0], [24.0, 7534.0], [24.1, 7534.0], [24.2, 7534.0], [24.3, 7534.0], [24.4, 7534.0], [24.5, 7735.0], [24.6, 7735.0], [24.7, 7735.0], [24.8, 7735.0], [24.9, 7735.0], [25.0, 7847.0], [25.1, 7847.0], [25.2, 7847.0], [25.3, 7847.0], [25.4, 7847.0], [25.5, 8003.0], [25.6, 8003.0], [25.7, 8003.0], [25.8, 8003.0], [25.9, 8003.0], [26.0, 8127.0], [26.1, 8127.0], [26.2, 8127.0], [26.3, 8127.0], [26.4, 8127.0], [26.5, 8137.0], [26.6, 8137.0], [26.7, 8137.0], [26.8, 8137.0], [26.9, 8137.0], [27.0, 8289.0], [27.1, 8289.0], [27.2, 8289.0], [27.3, 8289.0], [27.4, 8289.0], [27.5, 8391.0], [27.6, 8391.0], [27.7, 8391.0], [27.8, 8391.0], [27.9, 8391.0], [28.0, 8401.0], [28.1, 8401.0], [28.2, 8401.0], [28.3, 8401.0], [28.4, 8401.0], [28.5, 8413.0], [28.6, 8413.0], [28.7, 8413.0], [28.8, 8413.0], [28.9, 8413.0], [29.0, 8418.0], [29.1, 8418.0], [29.2, 8418.0], [29.3, 8418.0], [29.4, 8418.0], [29.5, 8438.0], [29.6, 8438.0], [29.7, 8438.0], [29.8, 8438.0], [29.9, 8438.0], [30.0, 8441.0], [30.1, 8441.0], [30.2, 8441.0], [30.3, 8441.0], [30.4, 8441.0], [30.5, 8455.0], [30.6, 8455.0], [30.7, 8455.0], [30.8, 8455.0], [30.9, 8455.0], [31.0, 8488.0], [31.1, 8488.0], [31.2, 8488.0], [31.3, 8488.0], [31.4, 8488.0], [31.5, 8530.0], [31.6, 8530.0], [31.7, 8530.0], [31.8, 8530.0], [31.9, 8530.0], [32.0, 8550.0], [32.1, 8550.0], [32.2, 8550.0], [32.3, 8550.0], [32.4, 8550.0], [32.5, 8557.0], [32.6, 8557.0], [32.7, 8557.0], [32.8, 8557.0], [32.9, 8557.0], [33.0, 8578.0], [33.1, 8578.0], [33.2, 8578.0], [33.3, 8578.0], [33.4, 8578.0], [33.5, 8585.0], [33.6, 8585.0], [33.7, 8585.0], [33.8, 8585.0], [33.9, 8585.0], [34.0, 8592.0], [34.1, 8592.0], [34.2, 8592.0], [34.3, 8592.0], [34.4, 8592.0], [34.5, 8594.0], [34.6, 8594.0], [34.7, 8594.0], [34.8, 8594.0], [34.9, 8594.0], [35.0, 8598.0], [35.1, 8598.0], [35.2, 8598.0], [35.3, 8598.0], [35.4, 8598.0], [35.5, 8599.0], [35.6, 8599.0], [35.7, 8599.0], [35.8, 8599.0], [35.9, 8599.0], [36.0, 8602.0], [36.1, 8602.0], [36.2, 8602.0], [36.3, 8602.0], [36.4, 8602.0], [36.5, 8613.0], [36.6, 8613.0], [36.7, 8613.0], [36.8, 8613.0], [36.9, 8613.0], [37.0, 8619.0], [37.1, 8619.0], [37.2, 8619.0], [37.3, 8619.0], [37.4, 8619.0], [37.5, 8632.0], [37.6, 8632.0], [37.7, 8632.0], [37.8, 8632.0], [37.9, 8632.0], [38.0, 8654.0], [38.1, 8654.0], [38.2, 8654.0], [38.3, 8654.0], [38.4, 8654.0], [38.5, 8678.0], [38.6, 8678.0], [38.7, 8678.0], [38.8, 8678.0], [38.9, 8678.0], [39.0, 8679.0], [39.1, 8679.0], [39.2, 8679.0], [39.3, 8679.0], [39.4, 8679.0], [39.5, 8690.0], [39.6, 8690.0], [39.7, 8690.0], [39.8, 8690.0], [39.9, 8690.0], [40.0, 8699.0], [40.1, 8699.0], [40.2, 8699.0], [40.3, 8699.0], [40.4, 8699.0], [40.5, 8716.0], [40.6, 8716.0], [40.7, 8716.0], [40.8, 8716.0], [40.9, 8716.0], [41.0, 8729.0], [41.1, 8729.0], [41.2, 8729.0], [41.3, 8729.0], [41.4, 8729.0], [41.5, 8731.0], [41.6, 8731.0], [41.7, 8731.0], [41.8, 8731.0], [41.9, 8731.0], [42.0, 8736.0], [42.1, 8736.0], [42.2, 8736.0], [42.3, 8736.0], [42.4, 8736.0], [42.5, 8741.0], [42.6, 8741.0], [42.7, 8741.0], [42.8, 8741.0], [42.9, 8741.0], [43.0, 8744.0], [43.1, 8744.0], [43.2, 8744.0], [43.3, 8744.0], [43.4, 8744.0], [43.5, 8747.0], [43.6, 8747.0], [43.7, 8747.0], [43.8, 8747.0], [43.9, 8747.0], [44.0, 8776.0], [44.1, 8776.0], [44.2, 8776.0], [44.3, 8776.0], [44.4, 8776.0], [44.5, 8782.0], [44.6, 8782.0], [44.7, 8782.0], [44.8, 8782.0], [44.9, 8782.0], [45.0, 8785.0], [45.1, 8785.0], [45.2, 8785.0], [45.3, 8785.0], [45.4, 8785.0], [45.5, 8793.0], [45.6, 8793.0], [45.7, 8793.0], [45.8, 8793.0], [45.9, 8793.0], [46.0, 8812.0], [46.1, 8812.0], [46.2, 8812.0], [46.3, 8812.0], [46.4, 8812.0], [46.5, 8821.0], [46.6, 8821.0], [46.7, 8821.0], [46.8, 8821.0], [46.9, 8821.0], [47.0, 8825.0], [47.1, 8825.0], [47.2, 8825.0], [47.3, 8825.0], [47.4, 8825.0], [47.5, 8827.0], [47.6, 8827.0], [47.7, 8827.0], [47.8, 8827.0], [47.9, 8827.0], [48.0, 8836.0], [48.1, 8836.0], [48.2, 8836.0], [48.3, 8836.0], [48.4, 8836.0], [48.5, 8838.0], [48.6, 8838.0], [48.7, 8838.0], [48.8, 8838.0], [48.9, 8838.0], [49.0, 8844.0], [49.1, 8844.0], [49.2, 8844.0], [49.3, 8844.0], [49.4, 8844.0], [49.5, 8854.0], [49.6, 8854.0], [49.7, 8854.0], [49.8, 8854.0], [49.9, 8854.0], [50.0, 8864.0], [50.1, 8864.0], [50.2, 8864.0], [50.3, 8864.0], [50.4, 8864.0], [50.5, 8873.0], [50.6, 8873.0], [50.7, 8873.0], [50.8, 8873.0], [50.9, 8873.0], [51.0, 8885.0], [51.1, 8885.0], [51.2, 8885.0], [51.3, 8885.0], [51.4, 8885.0], [51.5, 8896.0], [51.6, 8896.0], [51.7, 8896.0], [51.8, 8896.0], [51.9, 8896.0], [52.0, 8921.0], [52.1, 8921.0], [52.2, 8921.0], [52.3, 8921.0], [52.4, 8921.0], [52.5, 8922.0], [52.6, 8922.0], [52.7, 8922.0], [52.8, 8922.0], [52.9, 8922.0], [53.0, 8924.0], [53.1, 8924.0], [53.2, 8924.0], [53.3, 8924.0], [53.4, 8924.0], [53.5, 8956.0], [53.6, 8956.0], [53.7, 8956.0], [53.8, 8956.0], [53.9, 8956.0], [54.0, 9018.0], [54.1, 9018.0], [54.2, 9018.0], [54.3, 9018.0], [54.4, 9018.0], [54.5, 9036.0], [54.6, 9036.0], [54.7, 9036.0], [54.8, 9036.0], [54.9, 9036.0], [55.0, 9043.0], [55.1, 9043.0], [55.2, 9043.0], [55.3, 9043.0], [55.4, 9043.0], [55.5, 9065.0], [55.6, 9065.0], [55.7, 9065.0], [55.8, 9065.0], [55.9, 9065.0], [56.0, 9074.0], [56.1, 9074.0], [56.2, 9074.0], [56.3, 9074.0], [56.4, 9074.0], [56.5, 9076.0], [56.6, 9076.0], [56.7, 9076.0], [56.8, 9076.0], [56.9, 9076.0], [57.0, 9108.0], [57.1, 9108.0], [57.2, 9108.0], [57.3, 9108.0], [57.4, 9108.0], [57.5, 9140.0], [57.6, 9140.0], [57.7, 9140.0], [57.8, 9140.0], [57.9, 9140.0], [58.0, 9148.0], [58.1, 9148.0], [58.2, 9148.0], [58.3, 9148.0], [58.4, 9148.0], [58.5, 9167.0], [58.6, 9167.0], [58.7, 9167.0], [58.8, 9167.0], [58.9, 9167.0], [59.0, 9169.0], [59.1, 9169.0], [59.2, 9169.0], [59.3, 9169.0], [59.4, 9169.0], [59.5, 9174.0], [59.6, 9174.0], [59.7, 9174.0], [59.8, 9174.0], [59.9, 9174.0], [60.0, 9178.0], [60.1, 9178.0], [60.2, 9178.0], [60.3, 9178.0], [60.4, 9178.0], [60.5, 9183.0], [60.6, 9183.0], [60.7, 9183.0], [60.8, 9183.0], [60.9, 9183.0], [61.0, 9235.0], [61.1, 9235.0], [61.2, 9235.0], [61.3, 9235.0], [61.4, 9235.0], [61.5, 9278.0], [61.6, 9278.0], [61.7, 9278.0], [61.8, 9278.0], [61.9, 9278.0], [62.0, 9281.0], [62.1, 9281.0], [62.2, 9281.0], [62.3, 9281.0], [62.4, 9281.0], [62.5, 9285.0], [62.6, 9285.0], [62.7, 9285.0], [62.8, 9285.0], [62.9, 9285.0], [63.0, 9292.0], [63.1, 9292.0], [63.2, 9292.0], [63.3, 9292.0], [63.4, 9292.0], [63.5, 9301.0], [63.6, 9301.0], [63.7, 9301.0], [63.8, 9301.0], [63.9, 9301.0], [64.0, 9313.0], [64.1, 9313.0], [64.2, 9313.0], [64.3, 9313.0], [64.4, 9313.0], [64.5, 9319.0], [64.6, 9319.0], [64.7, 9319.0], [64.8, 9319.0], [64.9, 9319.0], [65.0, 9341.0], [65.1, 9341.0], [65.2, 9341.0], [65.3, 9341.0], [65.4, 9341.0], [65.5, 9342.0], [65.6, 9342.0], [65.7, 9342.0], [65.8, 9342.0], [65.9, 9342.0], [66.0, 9359.0], [66.1, 9359.0], [66.2, 9359.0], [66.3, 9359.0], [66.4, 9359.0], [66.5, 9378.0], [66.6, 9378.0], [66.7, 9378.0], [66.8, 9378.0], [66.9, 9378.0], [67.0, 9383.0], [67.1, 9383.0], [67.2, 9383.0], [67.3, 9383.0], [67.4, 9383.0], [67.5, 9384.0], [67.6, 9384.0], [67.7, 9384.0], [67.8, 9384.0], [67.9, 9384.0], [68.0, 9437.0], [68.1, 9437.0], [68.2, 9437.0], [68.3, 9437.0], [68.4, 9437.0], [68.5, 9453.0], [68.6, 9453.0], [68.7, 9453.0], [68.8, 9453.0], [68.9, 9453.0], [69.0, 9471.0], [69.1, 9471.0], [69.2, 9471.0], [69.3, 9471.0], [69.4, 9471.0], [69.5, 9481.0], [69.6, 9481.0], [69.7, 9481.0], [69.8, 9481.0], [69.9, 9481.0], [70.0, 9540.0], [70.1, 9540.0], [70.2, 9540.0], [70.3, 9540.0], [70.4, 9540.0], [70.5, 10104.0], [70.6, 10104.0], [70.7, 10104.0], [70.8, 10104.0], [70.9, 10104.0], [71.0, 10219.0], [71.1, 10219.0], [71.2, 10219.0], [71.3, 10219.0], [71.4, 10219.0], [71.5, 10220.0], [71.6, 10220.0], [71.7, 10220.0], [71.8, 10220.0], [71.9, 10220.0], [72.0, 10241.0], [72.1, 10241.0], [72.2, 10241.0], [72.3, 10241.0], [72.4, 10241.0], [72.5, 10249.0], [72.6, 10249.0], [72.7, 10249.0], [72.8, 10249.0], [72.9, 10249.0], [73.0, 10276.0], [73.1, 10276.0], [73.2, 10276.0], [73.3, 10276.0], [73.4, 10276.0], [73.5, 10282.0], [73.6, 10282.0], [73.7, 10282.0], [73.8, 10282.0], [73.9, 10282.0], [74.0, 10283.0], [74.1, 10283.0], [74.2, 10283.0], [74.3, 10283.0], [74.4, 10283.0], [74.5, 10303.0], [74.6, 10303.0], [74.7, 10303.0], [74.8, 10303.0], [74.9, 10303.0], [75.0, 10319.0], [75.1, 10319.0], [75.2, 10319.0], [75.3, 10319.0], [75.4, 10319.0], [75.5, 10345.0], [75.6, 10345.0], [75.7, 10345.0], [75.8, 10345.0], [75.9, 10345.0], [76.0, 10361.0], [76.1, 10361.0], [76.2, 10361.0], [76.3, 10361.0], [76.4, 10361.0], [76.5, 10365.0], [76.6, 10365.0], [76.7, 10365.0], [76.8, 10365.0], [76.9, 10365.0], [77.0, 10367.0], [77.1, 10367.0], [77.2, 10367.0], [77.3, 10367.0], [77.4, 10367.0], [77.5, 10384.0], [77.6, 10384.0], [77.7, 10384.0], [77.8, 10384.0], [77.9, 10384.0], [78.0, 10413.0], [78.1, 10413.0], [78.2, 10413.0], [78.3, 10413.0], [78.4, 10413.0], [78.5, 10414.0], [78.6, 10414.0], [78.7, 10414.0], [78.8, 10414.0], [78.9, 10414.0], [79.0, 10420.0], [79.1, 10420.0], [79.2, 10420.0], [79.3, 10420.0], [79.4, 10420.0], [79.5, 10436.0], [79.6, 10436.0], [79.7, 10436.0], [79.8, 10436.0], [79.9, 10436.0], [80.0, 10448.0], [80.1, 10448.0], [80.2, 10448.0], [80.3, 10448.0], [80.4, 10448.0], [80.5, 10451.0], [80.6, 10451.0], [80.7, 10451.0], [80.8, 10451.0], [80.9, 10451.0], [81.0, 10461.0], [81.1, 10461.0], [81.2, 10461.0], [81.3, 10461.0], [81.4, 10461.0], [81.5, 10471.0], [81.6, 10471.0], [81.7, 10471.0], [81.8, 10471.0], [81.9, 10471.0], [82.0, 10511.0], [82.1, 10511.0], [82.2, 10511.0], [82.3, 10511.0], [82.4, 10511.0], [82.5, 10525.0], [82.6, 10525.0], [82.7, 10525.0], [82.8, 10525.0], [82.9, 10525.0], [83.0, 10527.0], [83.1, 10527.0], [83.2, 10527.0], [83.3, 10527.0], [83.4, 10527.0], [83.5, 10535.0], [83.6, 10535.0], [83.7, 10535.0], [83.8, 10535.0], [83.9, 10535.0], [84.0, 10544.0], [84.1, 10544.0], [84.2, 10544.0], [84.3, 10544.0], [84.4, 10544.0], [84.5, 10560.0], [84.6, 10560.0], [84.7, 10560.0], [84.8, 10560.0], [84.9, 10560.0], [85.0, 10601.0], [85.1, 10601.0], [85.2, 10601.0], [85.3, 10601.0], [85.4, 10601.0], [85.5, 10909.0], [85.6, 10909.0], [85.7, 10909.0], [85.8, 10909.0], [85.9, 10909.0], [86.0, 15842.0], [86.1, 15842.0], [86.2, 15842.0], [86.3, 15842.0], [86.4, 15842.0], [86.5, 15848.0], [86.6, 15848.0], [86.7, 15848.0], [86.8, 15848.0], [86.9, 15848.0], [87.0, 15900.0], [87.1, 15900.0], [87.2, 15900.0], [87.3, 15900.0], [87.4, 15900.0], [87.5, 16062.0], [87.6, 16062.0], [87.7, 16062.0], [87.8, 16062.0], [87.9, 16062.0], [88.0, 16094.0], [88.1, 16094.0], [88.2, 16094.0], [88.3, 16094.0], [88.4, 16094.0], [88.5, 16095.0], [88.6, 16095.0], [88.7, 16095.0], [88.8, 16095.0], [88.9, 16095.0], [89.0, 16101.0], [89.1, 16101.0], [89.2, 16101.0], [89.3, 16101.0], [89.4, 16101.0], [89.5, 16108.0], [89.6, 16108.0], [89.7, 16108.0], [89.8, 16108.0], [89.9, 16108.0], [90.0, 16177.0], [90.1, 16177.0], [90.2, 16177.0], [90.3, 16177.0], [90.4, 16177.0], [90.5, 16194.0], [90.6, 16194.0], [90.7, 16194.0], [90.8, 16194.0], [90.9, 16194.0], [91.0, 16208.0], [91.1, 16208.0], [91.2, 16208.0], [91.3, 16208.0], [91.4, 16208.0], [91.5, 16255.0], [91.6, 16255.0], [91.7, 16255.0], [91.8, 16255.0], [91.9, 16255.0], [92.0, 16261.0], [92.1, 16261.0], [92.2, 16261.0], [92.3, 16261.0], [92.4, 16261.0], [92.5, 16354.0], [92.6, 16354.0], [92.7, 16354.0], [92.8, 16354.0], [92.9, 16354.0], [93.0, 16367.0], [93.1, 16367.0], [93.2, 16367.0], [93.3, 16367.0], [93.4, 16367.0], [93.5, 16445.0], [93.6, 16445.0], [93.7, 16445.0], [93.8, 16445.0], [93.9, 16445.0], [94.0, 16493.0], [94.1, 16493.0], [94.2, 16493.0], [94.3, 16493.0], [94.4, 16493.0], [94.5, 16511.0], [94.6, 16511.0], [94.7, 16511.0], [94.8, 16511.0], [94.9, 16511.0], [95.0, 16512.0], [95.1, 16512.0], [95.2, 16512.0], [95.3, 16512.0], [95.4, 16512.0], [95.5, 16515.0], [95.6, 16515.0], [95.7, 16515.0], [95.8, 16515.0], [95.9, 16515.0], [96.0, 16519.0], [96.1, 16519.0], [96.2, 16519.0], [96.3, 16519.0], [96.4, 16519.0], [96.5, 16533.0], [96.6, 16533.0], [96.7, 16533.0], [96.8, 16533.0], [96.9, 16533.0], [97.0, 16604.0], [97.1, 16604.0], [97.2, 16604.0], [97.3, 16604.0], [97.4, 16604.0], [97.5, 16645.0], [97.6, 16645.0], [97.7, 16645.0], [97.8, 16645.0], [97.9, 16645.0], [98.0, 16651.0], [98.1, 16651.0], [98.2, 16651.0], [98.3, 16651.0], [98.4, 16651.0], [98.5, 16666.0], [98.6, 16666.0], [98.7, 16666.0], [98.8, 16666.0], [98.9, 16666.0], [99.0, 16682.0], [99.1, 16682.0], [99.2, 16682.0], [99.3, 16682.0], [99.4, 16682.0], [99.5, 16682.0], [99.6, 16682.0], [99.7, 16682.0], [99.8, 16682.0], [99.9, 16682.0]], "isOverall": false, "label": "Search", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 6400.0, "maxY": 12.0, "series": [{"data": [[8300.0, 1.0], [8400.0, 7.0], [8200.0, 1.0], [8500.0, 9.0], [8600.0, 9.0], [8700.0, 11.0], [8800.0, 12.0], [8900.0, 4.0], [9000.0, 6.0], [9100.0, 8.0], [9200.0, 5.0], [9300.0, 9.0], [9400.0, 4.0], [9500.0, 1.0], [10100.0, 1.0], [10200.0, 7.0], [10300.0, 7.0], [10400.0, 8.0], [10500.0, 6.0], [10600.0, 1.0], [10900.0, 1.0], [15800.0, 2.0], [15900.0, 1.0], [16000.0, 3.0], [16100.0, 4.0], [16200.0, 3.0], [16300.0, 2.0], [16400.0, 2.0], [16500.0, 5.0], [16600.0, 6.0], [6400.0, 1.0], [6500.0, 2.0], [6600.0, 4.0], [6700.0, 3.0], [6800.0, 9.0], [6900.0, 4.0], [7000.0, 8.0], [7100.0, 3.0], [7200.0, 8.0], [7300.0, 5.0], [7500.0, 2.0], [7700.0, 1.0], [7800.0, 1.0], [8000.0, 1.0], [8100.0, 2.0]], "isOverall": false, "label": "Search", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 16600.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 200.0, "minX": 2.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 200.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 200.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 100.63000000000005, "minX": 1.61959974E12, "maxY": 100.63000000000005, "series": [{"data": [[1.61959974E12, 100.63000000000005]], "isOverall": false, "label": "CT Benchmark:  Queries - Search page", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.61959974E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 6441.0, "minX": 1.0, "maxY": 16682.0, "series": [{"data": [[2.0, 16666.0], [3.0, 16682.0], [4.0, 16651.0], [5.0, 16645.0], [6.0, 16515.0], [8.0, 16561.5], [9.0, 16511.0], [10.0, 16493.0], [11.0, 16533.0], [12.0, 16512.0], [13.0, 16445.0], [14.0, 16367.0], [15.0, 16354.0], [16.0, 16255.0], [17.0, 16208.0], [18.0, 16194.0], [19.0, 16261.0], [20.0, 16177.0], [21.0, 16108.0], [22.0, 16095.0], [23.0, 16101.0], [24.0, 16094.0], [25.0, 16062.0], [26.0, 15848.0], [27.0, 15900.0], [28.0, 15842.0], [29.0, 10909.0], [31.0, 10525.0], [33.0, 10568.0], [35.0, 10560.0], [34.0, 10535.5], [36.0, 10461.0], [39.0, 10471.0], [38.0, 10479.5], [41.0, 10414.0], [40.0, 10451.0], [43.0, 10420.0], [42.0, 10413.0], [45.0, 10361.0], [44.0, 10384.0], [47.0, 10436.0], [49.0, 10355.0], [48.0, 10367.0], [51.0, 10319.0], [50.0, 10303.0], [53.0, 10283.0], [52.0, 10282.0], [55.0, 10262.5], [57.0, 10219.0], [56.0, 10241.0], [59.0, 10104.0], [58.0, 10220.0], [61.0, 9540.0], [60.0, 9471.0], [63.0, 9481.0], [62.0, 9437.0], [67.0, 9235.0], [66.0, 9384.0], [65.0, 9278.0], [64.0, 9453.0], [71.0, 9380.5], [69.0, 9301.0], [68.0, 9313.0], [75.0, 9319.0], [74.0, 9342.0], [73.0, 9341.0], [72.0, 9359.0], [79.0, 9281.0], [78.0, 9285.0], [77.0, 9174.0], [76.0, 9292.0], [83.0, 9178.0], [82.0, 9167.0], [81.0, 9183.0], [80.0, 8956.0], [87.0, 9169.0], [86.0, 9074.0], [85.0, 8844.0], [84.0, 8921.0], [91.0, 9148.0], [90.0, 9065.0], [89.0, 9076.0], [88.0, 8896.0], [95.0, 8821.0], [94.0, 8827.0], [93.0, 9140.0], [92.0, 8825.0], [99.0, 9043.0], [98.0, 8776.0], [97.0, 9108.0], [96.0, 9036.0], [103.0, 8873.0], [102.0, 9018.0], [101.0, 8924.0], [100.0, 8690.0], [107.0, 8864.0], [106.0, 8836.0], [105.0, 8922.0], [104.0, 8699.0], [111.0, 8602.0], [110.0, 8785.0], [109.0, 8749.0], [115.0, 8716.0], [113.0, 8793.0], [112.0, 8854.0], [119.0, 8591.0], [117.0, 8812.0], [116.0, 8810.0], [123.0, 8739.0], [121.0, 8632.0], [120.0, 8679.0], [127.0, 8678.0], [126.0, 8729.0], [125.0, 8736.0], [124.0, 8741.0], [135.0, 8594.0], [134.0, 8599.0], [133.0, 8455.0], [132.0, 8619.0], [131.0, 8441.0], [130.0, 8598.0], [129.0, 8654.0], [128.0, 8585.0], [143.0, 8418.0], [142.0, 8488.0], [141.0, 8550.0], [140.0, 8557.0], [139.0, 8592.0], [138.0, 8554.0], [137.0, 8413.0], [151.0, 7735.0], [150.0, 7847.0], [149.0, 8003.0], [148.0, 8137.0], [147.0, 8127.0], [146.0, 8391.0], [145.0, 8401.0], [144.0, 8289.0], [159.0, 7331.0], [158.0, 7239.0], [156.0, 7372.0], [155.0, 7341.5], [153.0, 7534.0], [152.0, 7518.0], [167.0, 7208.0], [166.0, 7264.0], [165.0, 7110.0], [164.0, 7267.0], [163.0, 7280.0], [162.0, 7294.0], [161.0, 7273.0], [160.0, 7318.0], [175.0, 7048.5], [173.0, 7061.0], [170.0, 7101.0], [169.0, 7110.0], [168.0, 7093.0], [183.0, 6871.0], [182.0, 6905.0], [181.0, 6853.0], [180.0, 6879.0], [179.0, 7004.0], [178.0, 6956.0], [177.0, 6956.0], [176.0, 7026.0], [191.0, 6795.0], [190.0, 6847.0], [189.0, 6881.0], [188.0, 6755.0], [187.0, 6818.0], [186.0, 6908.0], [185.0, 6841.0], [184.0, 6808.0], [199.0, 6541.0], [198.0, 6555.0], [197.0, 6603.0], [196.0, 6645.0], [195.0, 6647.0], [193.0, 6760.0], [192.0, 6844.0], [200.0, 6441.0], [1.0, 16682.0]], "isOverall": false, "label": "Search", "isController": false}, {"data": [[100.63000000000005, 9687.149999999992]], "isOverall": false, "label": "Search-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 200.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 2050.0, "minX": 1.61959974E12, "maxY": 129780.0, "series": [{"data": [[1.61959974E12, 129780.0]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.61959974E12, 2050.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.61959974E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 9687.149999999992, "minX": 1.61959974E12, "maxY": 9687.149999999992, "series": [{"data": [[1.61959974E12, 9687.149999999992]], "isOverall": false, "label": "Search", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.61959974E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 9612.489999999998, "minX": 1.61959974E12, "maxY": 9612.489999999998, "series": [{"data": [[1.61959974E12, 9612.489999999998]], "isOverall": false, "label": "Search", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.61959974E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 6362.935, "minX": 1.61959974E12, "maxY": 6362.935, "series": [{"data": [[1.61959974E12, 6362.935]], "isOverall": false, "label": "Search", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.61959974E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 6441.0, "minX": 1.61959974E12, "maxY": 16682.0, "series": [{"data": [[1.61959974E12, 16682.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.61959974E12, 16170.1]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.61959974E12, 16681.84]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.61959974E12, 16511.95]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.61959974E12, 6441.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.61959974E12, 8859.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.61959974E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 6441.0, "minX": 1.0, "maxY": 16515.0, "series": [{"data": [[1.0, 6441.0], [17.0, 16515.0], [82.0, 8849.0], [11.0, 12130.0], [46.0, 7009.0], [3.0, 10104.0], [29.0, 10414.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 82.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 6409.0, "minX": 1.0, "maxY": 16455.0, "series": [{"data": [[1.0, 6409.0], [17.0, 16455.0], [82.0, 8786.5], [11.0, 12067.5], [46.0, 6925.0], [3.0, 10035.0], [29.0, 10334.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 82.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 3.3333333333333335, "minX": 1.61959974E12, "maxY": 3.3333333333333335, "series": [{"data": [[1.61959974E12, 3.3333333333333335]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.61959974E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 3.3333333333333335, "minX": 1.61959974E12, "maxY": 3.3333333333333335, "series": [{"data": [[1.61959974E12, 3.3333333333333335]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.61959974E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 3.3333333333333335, "minX": 1.61959974E12, "maxY": 3.3333333333333335, "series": [{"data": [[1.61959974E12, 3.3333333333333335]], "isOverall": false, "label": "Search-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.61959974E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 3.3333333333333335, "minX": 1.61959974E12, "maxY": 3.3333333333333335, "series": [{"data": [[1.61959974E12, 3.3333333333333335]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.61959974E12, "title": "Total Transactions Per Second"}},
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


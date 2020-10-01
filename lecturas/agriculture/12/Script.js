
( function(win, doc) {
            var audioPlayer = doc.getElementById("music");
            var subtitles = doc.getElementById("subtitles");
						var time=5.5;
						 var syncData =[
               { "start": time,"end": time+0.50,"text": "Is history " },
               { "start": time+0.50,"end": time+1.00,"text": " " },
               { "start": time+1.00,"end": time+1.50,"text": " " },
               { "start": time+2.00,"end": time+2.50,"text": " " },
               { "start": time+2.50,"end": time+3.00,"text": " " },
               { "start": time+2.90,"end": time+3.40,"text": " " },
               { "start": time+3.80,"end": time+4.30,"text": " " },
               { "start": time+4.70,"end": time+5.20,"text": "" },
               { "start": time+30.50,"end": time+31.00,"text": " " },
               { "start": time+31.00,"end": time+31.50,"text": " " },
               { "start": time+31.50,"end": time+32.00,"text": " " },
               { "start": time+32.00,"end": time+32.50,"text": " " },
               { "start": time+32.50,"end": time+33.00,"text": "  " },
               { "start": time+33.50,"end": time+34.00,"text": " " },
               { "start": time+33.90,"end": time+34.40,"text": " " },
               { "start": time+34.40,"end": time+34.90,"text": " " },
               { "start": time+35.10,"end": time+35.60,"text": " " },
               { "start": time+35.60,"end": time+36.10,"text": " " },
               { "start": time+36.50,"end": time+37.00,"text": " " },
               { "start": time+37.00,"end": time+37.50,"text": " " },
               { "start": time+38.00,"end": time+38.50,"text": " " },

               { "start": time+40.50,"end": time+41.00,"text": " " },
               { "start": time+42.00,"end": time+42.50,"text": "" },
               { "start": time+42.50,"end": time+43.00,"text": "" },
               { "start": time+42.90,"end": time+43.40,"text": " " },
               { "start": time+44.00,"end": time+44.50,"text": " " },
               { "start": time+44.70,"end": time+45.20,"text": " " },
               { "start": time+45.50,"end": time+46.00,"text": "" },
               { "start": time+46.00,"end": time+46.50,"text": " " },
               { "start": time+47.50,"end": time+48.00,"text": " " },
               { "start": time+49.00,"end": time+49.50,"text": " " },
               { "start": time+50.00,"end": time+50.50,"text": "" },
               { "start": time+50.50,"end": time+51.00,"text": " " },
               { "start": time+51.50,"end": time+52.00,"text": " " },
               { "start": time+52.00,"end": time+52.50,"text": " " },
               { "start": time+53.20,"end": time+53.70,"text": " " },
               { "start": time+53.70,"end": time+54.20,"text": " " },
               { "start": time+54.20,"end": time+54.70,"text": " " },
               { "start": time+55.30,"end": time+55.80,"text": " " },
               { "start": time+56.10,"end": time+56.60,"text": "" },
               { "start": time+56.50,"end": time+57.00,"text": " " },
               { "start": time+57.30,"end": time+57.80,"text": " " },
               { "start": time+58.20,"end": time+58.70,"text": " " },
               { "start": time+58.70,"end": time+59.20,"text": " " },
               { "start": time+60.70,"end": time+61.50,"text": " " },
               { "start": time+61.50,"end": time+62.00,"text": " " },
               { "start": time+62.00,"end": time+62.50,"text": "" },
               { "start": time+62.50,"end": time+63.00,"text": " " },
               { "start": time+63.00,"end": time+63.50,"text": " " },
               { "start": time+63.50,"end": time+64.00,"text": " " },
               { "start": time+64.00,"end": time+64.50,"text": " " },
               { "start": time+64.50,"end": time+65.00,"text": " "},
               { "start": time+65.00,"end": time+65.50,"text": " " },
               { "start": time+66.00,"end": time+66.50,"text": " " },

               { "start": time+79.30,"end": time+79.80,"text": " " },
               { "start": time+79.60,"end": time+70.10,"text": "" },
               { "start": time+70.00,"end": time+70.50,"text": "" },
               { "start": time+70.50,"end": time+71.00,"text": " " },
               { "start": time+71.00,"end": time+71.50,"text": " " },
               { "start": time+71.50,"end": time+72.00,"text": " " },
               { "start": time+72.00,"end": time+72.50,"text": "" },
               { "start": time+72.50,"end": time+73.00,"text": " " },
               { "start": time+73.50,"end": time+74.00,"text": " " },
               { "start": time+73.90,"end": time+74.40,"text": " " },
               { "start": time+74.40,"end": time+74.90,"text": " " },
               { "start": time+75.10,"end": time+75.60,"text": " " },
               { "start": time+75.60,"end": time+76.10,"text": "" },
               { "start": time+76.50,"end": time+77.00,"text": " " },
               { "start": time+77.00,"end": time+77.50,"text": " " },
               { "start": time+78.00,"end": time+78.50,"text": " " },

                ];

            createSubtitle();

            function createSubtitle()
            {
                var element;
                for (var i = 0; i < syncData.length; i++) {
                    element = doc.createElement('a');
                    element.setAttribute("id", "c_" + i);
                    element.setAttribute("class","rd-word");
                    element.setAttribute("data-inicio", syncData[i].start);
                    element.innerText = syncData[i].text + "";
                    subtitles.appendChild(element);
                }
            }

            audioPlayer.addEventListener("timeupdate", function(e){
                syncData.forEach(function(element, index, array){
                    if( audioPlayer.currentTime >= element.start && audioPlayer.currentTime <= element.end ){
                      $(".rd-word").css("color","rgba(0,0,0,0.8)");
                      for(i=0;i<=index; i++){
                        subtitles.children[i].style.color = '#279CD7';
                      }
                    }
                });
            });

        }(window, document));

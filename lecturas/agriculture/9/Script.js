
( function(win, doc) {
            var audioPlayer = doc.getElementById("music");
            var subtitles = doc.getElementById("subtitles");
						var time=9.2;
						 var syncData =[
               { "start": time,"end": time+0.50,"text": "Have " },
               { "start": time+0.30,"end": time+0.80,"text": "you " },
               { "start": time+0.60,"end": time+1.10,"text": "heard " },
               { "start": time+1.00,"end": time+1.50,"text": "of " },
               { "start": time+1.20,"end": time+1.70,"text": "\"buying  " },
               { "start": time+1.50,"end": time+2.00,"text": "local\" " },
               { "start": time+2.20,"end": time+2.70,"text": "or of " },
               { "start": time+2.70,"end": time+3.20,"text": "genetically " },
               { "start": time+3.20,"end": time+3.70,"text": "modified " },
               { "start": time+3.80,"end": time+4.30,"text": "organisms " },
               { "start": time+5.00,"end": time+5.50,"text": "(GMOs)? " },
               { "start": time+6.50,"end": time+7.00,"text": "Have " },
               { "start": time+6.70,"end": time+7.20,"text": "you " },
               { "start": time+7.00,"end": time+7.50,"text": "ever " },
               { "start": time+7.40,"end": time+7.90,"text": "thought " },
               { "start": time+7.70,"end": time+8.20,"text": "about " },
               { "start": time+8.10,"end": time+8.60,"text": "where " },
               { "start": time+8.50,"end": time+9.00,"text": "the food " },
               { "start": time+8.70,"end": time+9.20,"text": "you " },
               { "start": time+8.90,"end": time+9.40,"text": "eat " },
               { "start": time+9.20,"end": time+9.70,"text": "comes " },
               { "start": time+9.50,"end": time+10.00,"text": "from? " },
               { "start": time+10.50,"end": time+11.00,"text": "These " },
               { "start": time+11.00,"end": time+11.50,"text": "questions " },
               { "start": time+11.50,"end": time+12.00,"text": "are " },
               { "start": time+12.00,"end": time+12.50,"text": "essential, " },
               { "start": time+12.90,"end": time+13.40,"text": "but " },
               { "start": time+13.30,"end": time+13.80,"text": "most " },
               { "start": time+13.60,"end": time+14.10,"text": "of " },
               { "start": time+13.90,"end": time+14.40,"text": "us " },
               { "start": time+14.20,"end": time+14.60,"text": "\don't\ " },
               { "start": time+14.50,"end": time+15.00,"text": "think " },
               { "start": time+14.90,"end": time+15.40,"text": "about " },
               { "start": time+15.20,"end": time+15.70,"text": "them " },
               { "start": time+15.50,"end": time+16.00,"text": "very " },
               { "start": time+15.80,"end": time+16.30,"text": "often, " },
               { "start": time+16.70,"end": time+17.20,"text": "especially " },
               { "start": time+17.50,"end": time+18.00,"text": "about " },
               { "start": time+18.00,"end": time+18.50,"text": "where " },
               { "start": time+18.30,"end": time+18.80,"text": "our " },
               { "start": time+18.50,"end": time+19.00,"text": "food " },
               { "start": time+18.90,"end": time+19.40,"text": "comes " },
               { "start": time+19.20,"end": time+19.70,"text": "from. " },

               { "start": time+20.50,"end": time+21.00,"text": "\n\nFood " },
               { "start": time+21.00,"end": time+21.50,"text": "production " },
               { "start": time+22.00,"end": time+22.50,"text": "is big " },
               { "start": time+22.50,"end": time+23.00,"text": "business " },
               { "start": time+23.00,"end": time+23.50,"text": "and  " },
               { "start": time+23.50,"end": time+24.00,"text": "includes " },
               { "start": time+24.00,"end": time+24.50,"text": "various " },
               { "start": time+24.50,"end": time+25.00,"text": "systems " },
               { "start": time+25.00,"end": time+25.50,"text": "that " },
               { "start": time+25.50,"end": time+26.00,"text": "significantly " },
               { "start": time+26.00,"end": time+26.50,"text": "influence " },
               { "start": time+26.50,"end": time+27.00,"text": "what " },
               { "start": time+27.00,"end": time+27.50,"text": "we eat. " },
               { "start": time+28.00,"end": time+28.50,"text": "From " },
               { "start": time+28.50,"end": time+29.00,"text": "growing " },
               { "start": time+29.00,"end": time+29.50,"text": "and " },
               { "start": time+29.50,"end": time+30.00,"text": "harvesting " },
               { "start": time+30.00,"end": time+30.50,"text": "food " },
               { "start": time+30.50,"end": time+31.00,"text": "to waste " },
               { "start": time+31.00,"end": time+31.50,"text": "recovery, " },
               { "start": time+32.20,"end": time+32.70,"text": "the " },
               { "start": time+32.90,"end": time+33.40,"text": "agricultural " },
               { "start": time+33.80,"end": time+34.30,"text": "industry " },
               { "start": time+34.30,"end": time+34.80,"text": "employs " },
               { "start": time+34.80,"end": time+35.30,"text": "about " },
               { "start": time+35.50,"end": time+36.00,"text": "40% " },
               { "start": time+36.00,"end": time+36.50,"text": "of the " },
               { "start": time+36.50,"end": time+37.00,"text": "world's " },
               { "start": time+36.80,"end": time+37.30,"text": "population " },
               { "start": time+37.80,"end": time+38.30,"text": "and " },
               { "start": time+38.10,"end": time+38.60,"text": "is " },
               { "start": time+38.40,"end": time+38.90,"text": "one " },
               { "start": time+39.00,"end": time+39.50,"text": "of the " },
               { "start": time+39.40,"end": time+39.90,"text": "largest " },
               { "start": time+39.80,"end": time+40.30,"text": "economic " },
               { "start": time+40.30,"end": time+40.80,"text": "sectors " },
               { "start": time+40.80,"end": time+41.30,"text": "throughout " },
               { "start": time+41.30,"end": time+41.80,"text": "the world. " },


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

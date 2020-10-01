
( function(win, doc) {
            var audioPlayer = doc.getElementById("music");
            var subtitles = doc.getElementById("subtitles");
						var time=8.10;
						 var syncData =[
               { "start": time,"end": time+0.50,"text": "Jean " },
               { "start": time+0.50,"end": time+1.00,"text": "Piaget " },
               { "start": time+1.50,"end": time+2.00,"text": "was a " },
               { "start": time+2.00,"end": time+2.50,"text": "Swiss " },
               { "start": time+2.30,"end": time+3.00,"text": "psychologist " },
               { "start": time+3.00,"end": time+3.50,"text": "who " },
               { "start": time+3.30,"end": time+4.00,"text": "changed " },
               { "start": time+3.80,"end": time+4.50,"text": "the way " },
               { "start": time+4.50,"end": time+5.00,"text": "we think " },
               { "start": time+5.00,"end": time+5.50,"text": "about " },
               { "start": time+5.50,"end": time+6.00,"text": "children, " },
               { "start": time+6.20,"end": time+6.70,"text": "learning, " },
               { "start": time+6.70,"end": time+7.40,"text": "and " },
               { "start": time+7.30,"end": time+7.80,"text": "education. " },
               { "start": time+8.50,"end": time+9.00,"text": "His " },
               { "start": time+9.00,"end": time+9.50,"text": "theories " },
               { "start": time+9.60,"end": time+10.10,"text": "in child " },
               { "start": time+10.10,"end": time+10.60,"text": "and " },
               { "start": time+10.60,"end": time+11.10,"text": "cognitive " },
               { "start": time+11.10,"end": time+11.60,"text": "development " },
               { "start": time+12.00,"end": time+12.50,"text": "were " },
               { "start": time+12.50,"end": time+13.00,"text": "the basis  " },
               { "start": time+13.00,"end": time+13.50,"text": "for " },
               { "start": time+13.30,"end": time+13.80,"text": "what we " },
               { "start": time+13.70,"end": time+14.20,"text": "call " },
               { "start": time+14.50,"end": time+15.00,"text": "\"Constru"},
               { "start": time+14.80,"end": time+15.50,"text": "ctivism\". " },

               { "start": time+16.00,"end": time+16.50,"text": "\n\nPiaget " },
               { "start": time+16.70,"end": time+17.20,"text": "was " },
               { "start": time+17.20,"end": time+17.70,"text": "interested " },
               { "start": time+17.70,"end": time+18.20,"text": "in the " },
               { "start": time+18.20,"end": time+18.70,"text": "process " },
               { "start": time+18.70,"end": time+19.20,"text": "of child " },
               { "start": time+19.20,"end": time+19.70,"text": "development " },
               { "start": time+20.00,"end": time+20.50,"text": "and " },
               { "start": time+20.20,"end": time+20.70,"text": "how " },
               { "start": time+20.70,"end": time+21.20,"text": "learners " },
               { "start": time+21.20,"end": time+21.70,"text": " \"construct\" " },
               { "start": time+21.70,"end": time+22.20,"text": "knowledge. " },
               { "start": time+22.60,"end": time+23.10,"text": "He " },
               { "start": time+23.00,"end": time+23.50,"text": "believed " },
               { "start": time+23.30,"end": time+23.80,"text": "that " },
               { "start": time+24.00,"end": time+24.50,"text": "knowledge, " },
               { "start": time+24.70,"end": time+25.20,"text": "learning, " },
               { "start": time+25.20,"end": time+25.70,"text": "and " },
               { "start": time+25.50,"end": time+26.00,"text": "unders" },
               { "start": time+26.00,"end": time+26.50,"text": "tanding " },
               { "start": time+26.80,"end": time+27.30,"text": "were " },
               { "start": time+27.10,"end": time+27.60,"text": "built on " },
               { "start": time+27.60,"end": time+28.10,"text": "previous " },
               { "start": time+28.10,"end": time+28.60,"text": "experiences. " },
               { "start": time+29.00,"end": time+29.50,"text": "He " },
               { "start": time+29.50,"end": time+30.00,"text": "called " },
               { "start": time+30.00,"end": time+30.50,"text": "the basic " },
               { "start": time+30.50,"end": time+31.00,"text": "building " },
               { "start": time+31.00,"end": time+31.50,"text": "blocks " },
               { "start": time+31.50,"end": time+32.00,"text": "for learning " },
               { "start": time+32.00,"end": time+32.50,"text": "\"schemas\" " },
               { "start": time+33.00,"end": time+33.50,"text": "which were " },
               { "start": time+33.50,"end": time+34.00,"text": "described " },
               { "start": time+34.50,"end": time+35.00,"text": "as mental " },
               { "start": time+35.00,"end": time+35.50,"text": "models " },
               { "start": time+35.50,"end": time+36.00,"text": "of the " },
               { "start": time+36.00,"end": time+36.50,"text": "world. " },

               { "start": time+37.50,"end": time+38.00,"text": "\n\nBefore " },
               { "start": time+37.80,"end": time+38.30,"text": "his " },
               { "start": time+38.30,"end": time+39.00,"text": "research, " },
               { "start": time+39.00,"end": time+39.50,"text": "many " },
               { "start": time+39.50,"end": time+40.00,"text": "psycho" },
               { "start": time+39.80,"end": time+40.30,"text": "logists " },
               { "start": time+40.50,"end": time+41.00,"text": "believed " },
               { "start": time+40.80,"end": time+41.30,"text": "children " },
               { "start": time+41.30,"end": time+41.80,"text": "to be " },
               { "start": time+41.50,"end": time+42.00,"text": "less " },
               { "start": time+42.00,"end": time+42.50,"text": "competent " },
               { "start": time+42.50,"end": time+43.00,"text": "thinkers " },
               { "start": time+43.30,"end": time+43.80,"text": "than " },
               { "start": time+43.50,"end": time+44.00,"text": "adults. " },
               { "start": time+44.70,"end": time+45.20,"text": "However, " },
               { "start": time+45.50,"end": time+46.00,"text": "what " },
               { "start": time+46.00,"end": time+46.50,"text": "Piaget " },
               { "start": time+46.50,"end": time+47.00,"text": "discovered " },
               { "start": time+47.30,"end": time+47.80,"text": "was that " },
               { "start": time+47.80,"end": time+48.30,"text": "children " },
               { "start": time+48.30,"end": time+48.80,"text": "are born " },
               { "start": time+48.70,"end": time+49.20,"text": "with a " },
               { "start": time+49.00,"end": time+49.50,"text": "very " },
               { "start": time+49.40,"end": time+49.90,"text": "basic " },
               { "start": time+49.70,"end": time+50.20,"text": "mental " },
               { "start": time+50.20,"end": time+50.70,"text": "structure. " },
               { "start": time+51.00,"end": time+51.50,"text": "Through " },
               { "start": time+51.50,"end": time+52.00,"text": "assimi" },
               { "start": time+52.00,"end": time+52.50,"text": "lation " },
               { "start": time+52.50,"end": time+53.00,"text": "and " },
               { "start": time+53.00,"end": time+53.50,"text": "accomm" },
               { "start": time+53.30,"end": time+53.80,"text": "odation. " },
               { "start": time+54.00,"end": time+54.50,"text": "Piaget " },
               { "start": time+54.50,"end": time+55.00,"text": "showed " },
               { "start": time+55.30,"end": time+55.80,"text": "how " },
               { "start": time+55.70,"end": time+56.20,"text": "learners " },
               { "start": time+56.20,"end": time+56.70,"text": "might " },
               { "start": time+56.50,"end": time+57.00,"text": "learn " },
               { "start": time+57.00,"end": time+57.50,"text": "through " },
               { "start": time+57.50,"end": time+58.00,"text": "experiences " },
               { "start": time+58.50,"end": time+59.00,"text": "that " },
               { "start": time+58.80,"end": time+59.30,"text": "change " },
               { "start": time+59.30,"end": time+59.80,"text": "their " },
               { "start": time+59.60,"end": time+60.10,"text": "underst" },
               { "start": time+60.00,"end": time+60.50,"text": "anding " },
               { "start": time+60.50,"end": time+61.00,"text": "of the " },
               { "start": time+61.00,"end": time+61.50,"text": "world. " },

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

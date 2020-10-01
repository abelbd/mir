
( function(win, doc) {
            var audioPlayer = doc.getElementById("music");
            var subtitles = doc.getElementById("subtitles");
						var time=5.50;  //Valor de la variable de tiempo
						 var syncData =[
               { "start": time,"end": time+0.50,"text": "Is history " },
               { "start": time+0.50,"end": time+1.00,"text": "a science " },
               { "start": time+1.00,"end": time+1.50,"text": "or an " },
               { "start": time+2.50,"end": time+2.50,"text": "art? " },
               { "start": time+2.50,"end": time+2.50,"text": "While " },
               { "start": time+2.50,"end": time+3.00,"text": "this " },
               { "start": time+3.00,"end": time+3.50,"text": "may " },
               { "start": time+3.50,"end": time+4.00,"text": "seem " },
               { "start": time+4.00,"end": time+4.50,"text": "like a " },
               { "start": time+4.50,"end": time+5.00,"text": "simple " },
               { "start": time+5.00,"end": time+5.50,"text": "question, " },
               { "start": time+6.00,"end": time+6.50,"text": "there is " },
               { "start": time+6.50,"end": time+7.00,"text": "some " },
               { "start": time+7.00,"end": time+7.50,"text": "history " },
               { "start": time+7.50,"end": time+8.00,"text": "around " },
               { "start": time+8.00,"end": time+8.50,"text": "the discussion. " },
               { "start": time+9.00,"end": time+9.50,"text": "The " },
               { "start": time+9.50,"end": time+10.00,"text": "Academia " },
               { "start": time+10.00,"end": time+10.50,"text": "Europaea " },
               { "start": time+10.50,"end": time+11.00,"text": "categorizes " },
               { "start": time+11.00,"end": time+11.50,"text": "all " },
/*               { "start": time+4.50,"end": time+5.00,"text": " " },
               { "start": time+1.00,"end": time+1.50,"text": " " },
               { "start": time+2.00,"end": time+2.50,"text": " " },
               { "start": time+3.00,"end": time+3.50,"text": " " },
               { "start": time+4.00,"end": time+4.50,"text": " " },
               { "start": time+4.50,"end": time+5.00,"text": " " },
               { "start": time+1.00,"end": time+1.50,"text": " " },
               { "start": time+2.00,"end": time+2.50,"text": " " },
               { "start": time+3.00,"end": time+3.50,"text": " " },
               { "start": time+4.00,"end": time+4.50,"text": " " },
               { "start": time+4.50,"end": time+5.00,"text": " " },
               { "start": time+4.50,"end": time+5.00,"text": " " },
               { "start": time+1.00,"end": time+1.50,"text": " " },
               { "start": time+2.00,"end": time+2.50,"text": " " },
               { "start": time+3.00,"end": time+3.50,"text": " " },
               { "start": time+4.00,"end": time+4.50,"text": " " },
               { "start": time+4.50,"end": time+5.00,"text": " " },
               { "start": time+1.00,"end": time+1.50,"text": " " },
               { "start": time+2.00,"end": time+2.50,"text": " " },
               { "start": time+3.00,"end": time+3.50,"text": " " },
               { "start": time+4.00,"end": time+4.50,"text": " " },
               { "start": time+4.50,"end": time+5.00,"text": " " },
               { "start": time+4.50,"end": time+5.00,"text": " " },
               { "start": time+1.00,"end": time+1.50,"text": " " },
               { "start": time+2.00,"end": time+2.50,"text": " " },
               { "start": time+3.00,"end": time+3.50,"text": " " },
               { "start": time+4.00,"end": time+4.50,"text": " " },
               { "start": time+4.50,"end": time+5.00,"text": " " },
               { "start": time+1.00,"end": time+1.50,"text": " " },
               { "start": time+2.00,"end": time+2.50,"text": " " },
               { "start": time+3.00,"end": time+3.50,"text": " " },
               { "start": time+4.00,"end": time+4.50,"text": " " },
               { "start": time+4.50,"end": time+5.00,"text": " " },
               { "start": time+4.50,"end": time+5.00,"text": " " },
               { "start": time+1.00,"end": time+1.50,"text": " " },
               { "start": time+2.00,"end": time+2.50,"text": " " },
               { "start": time+3.00,"end": time+3.50,"text": " " },
               { "start": time+4.00,"end": time+4.50,"text": " " },
               { "start": time+4.50,"end": time+5.00,"text": " " },
               { "start": time+1.00,"end": time+1.50,"text": " " },
               { "start": time+2.00,"end": time+2.50,"text": " " },
               { "start": time+3.00,"end": time+3.50,"text": " " },
               { "start": time+4.00,"end": time+4.50,"text": " " },
               { "start": time+4.50,"end": time+5.00,"text": " " },
               { "start": time+4.50,"end": time+5.00,"text": " " },
               { "start": time+1.00,"end": time+1.50,"text": " " },
               { "start": time+2.00,"end": time+2.50,"text": " " },
               { "start": time+3.00,"end": time+3.50,"text": " " },
               { "start": time+4.00,"end": time+4.50,"text": " " },
               { "start": time+4.50,"end": time+5.00,"text": " " },
               { "start": time+1.00,"end": time+1.50,"text": " " },
               { "start": time+2.00,"end": time+2.50,"text": " " },
               { "start": time+3.00,"end": time+3.50,"text": " " },
               { "start": time+4.00,"end": time+4.50,"text": " " },
               { "start": time+4.50,"end": time+5.00,"text": " " },
               { "start": time+4.50,"end": time+5.00,"text": " " },
               { "start": time+1.00,"end": time+1.50,"text": " " },
               { "start": time+2.00,"end": time+2.50,"text": " " },
               { "start": time+3.00,"end": time+3.50,"text": " " },
               { "start": time+4.00,"end": time+4.50,"text": " " },
               { "start": time+4.50,"end": time+5.00,"text": " " },
               { "start": time+1.00,"end": time+1.50,"text": " " },
               { "start": time+2.00,"end": time+2.50,"text": " " },
               { "start": time+3.00,"end": time+3.50,"text": " " },
               { "start": time+4.00,"end": time+4.50,"text": " " },
               { "start": time+4.50,"end": time+5.00,"text": " " },
*/

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

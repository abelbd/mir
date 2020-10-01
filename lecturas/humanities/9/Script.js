
( function(win, doc) {
            var audioPlayer = doc.getElementById("music");
            var subtitles = doc.getElementById("subtitles");
						var time=8.50;
						 var syncData =[
               { "start": time,"end": time+0.50,"text": "Social " },
               { "start": time+0.50,"end": time+1.00,"text": "work " },
               { "start": time+0.80,"end": time+1.30,"text": "as a " },
               { "start": time+1.30,"end": time+1.80,"text": "field " },
               { "start": time+1.70,"end": time+2.20,"text": "of study " },
               { "start": time+2.20,"end": time+2.70,"text": "has " },
               { "start": time+2.50,"end": time+3.00,"text": "its " },
               { "start": time+2.80,"end": time+3.30,"text": "roots " },
               { "start": time+3.30,"end": time+3.80,"text": "in " },
               { "start": time+3.80,"end": time+4.30,"text": "philan" },
               { "start": time+4.30,"end": time+4.80,"text": "thropy " },
               { "start": time+4.80,"end": time+5.30,"text": "and " },
               { "start": time+5.10,"end": time+5.60,"text": "grass" },
               { "start": time+5.50,"end": time+6.00,"text": "roots " },
               { "start": time+5.80,"end": time+6.30,"text": "organizing. " },
               { "start": time+7.20,"end": time+7.70,"text": "Early " },
               { "start": time+7.50,"end": time+8.00,"text": "social " },
               { "start": time+8.00,"end": time+8.50,"text": "work " },
               { "start": time+8.20,"end": time+8.70,"text": "was " },
               { "start": time+8.50,"end": time+9.00,"text": "done " },
               { "start": time+8.80,"end": time+9.30,"text": "at local " },
               { "start": time+9.30,"end": time+9.80,"text": "levels " },
               { "start": time+9.80,"end": time+10.30,"text": "by " },
               { "start": time+10.30,"end": time+10.80,"text": "individuals, " },
               { "start": time+11.20,"end": time+11.70,"text": "as well " },
               { "start": time+11.60,"end": time+12.10,"text": "as by " },
               { "start": time+12.00,"end": time+12.50,"text": "religious " },
               { "start": time+12.40,"end": time+12.90,"text": "and " },
               { "start": time+12.70,"end": time+13.20,"text": "community " },
               { "start": time+13.20,"end": time+13.70,"text": "organi" },
               { "start": time+13.60,"end": time+14.10,"text": "zations. " },
               { "start": time+15.50,"end": time+16.00,"text": "During " },
               { "start": time+16.00,"end": time+16.50,"text": "the industrial " },
               { "start": time+16.50,"end": time+17.00,"text": "revolution, " },
               { "start": time+17.50,"end": time+18.00,"text": "social " },
               { "start": time+18.00,"end": time+18.50,"text": "work " },
               { "start": time+18.30,"end": time+18.80,"text": "was " },
               { "start": time+18.70,"end": time+19.20,"text": "recognized " },
               { "start": time+19.20,"end": time+19.70,"text": "and " },
               { "start": time+19.70,"end": time+20.20,"text": "defined " },
               { "start": time+20.20,"end": time+20.70,"text": "as a " },
               { "start": time+20.70,"end": time+21.20,"text": "formal " },
               { "start": time+21.10,"end": time+21.60,"text": "area of " },
               { "start": time+21.50,"end": time+22.00,"text": "study. " },
               { "start": time+22.50,"end": time+23.00,"text": "This  " },
               { "start": time+22.80,"end": time+23.30,"text": "was " },
               { "start": time+23.30,"end": time+23.80,"text": "partly " },
               { "start": time+23.80,"end": time+24.30,"text": "due " },
               { "start": time+24.10,"end": time+24.60,"text": "to the " },
               { "start": time+24.50,"end": time+25.00,"text": "amount " },
               { "start": time+24.90,"end": time+25.40,"text": "of work " },
               { "start": time+25.50,"end": time+26.00,"text": "being " },
               { "start": time+25.70,"end": time+26.20,"text": "done by " },
               { "start": time+26.20,"end": time+26.70,"text": "different " },
               { "start": time+26.60,"end": time+27.20,"text": "organi" },
               { "start": time+27.00,"end": time+27.50,"text": "zations " },
               { "start": time+27.50,"end": time+28.00,"text": "to deal " },
               { "start": time+28.00,"end": time+28.50,"text": "with " },
               { "start": time+28.50,"end": time+29.00,"text": "mass " },
               { "start": time+28.80,"end": time+29.30,"text": "urban " },
               { "start": time+29.30,"end": time+29.80,"text": "poverty " },
               { "start": time+30.00,"end": time+30.50,"text": "caused by " },
               { "start": time+30.50,"end": time+31.00,"text": "industri" },
               { "start": time+31.00,"end": time+31.50,"text": "alization " },
               { "start": time+31.40,"end": time+31.90,"text": "and " },
               { "start": time+31.90,"end": time+32.40,"text": "urbani" },
               { "start": time+32.40,"end": time+32.90,"text": "zation. " },
               { "start": time+34.00,"end": time+34.50,"text": "Today " },
               { "start": time+34.50,"end": time+35.00,"text": "social " },
               { "start": time+35.00,"end": time+35.50,"text": "work " },
               { "start": time+35.50,"end": time+36.00,"text": "is an " },
               { "start": time+36.00,"end": time+36.50,"text": "essential " },
               { "start": time+36.30,"end": time+36.80,"text": "part " },
               { "start": time+36.70,"end": time+37.20,"text": "of our " },
               { "start": time+37.20,"end": time+37.70,"text": "society, " },
               { "start": time+38.00,"end": time+38.50,"text": "connecting " },
               { "start": time+38.40,"end": time+38.90,"text": "individuals " },
               { "start": time+38.90,"end": time+39.40,"text": "to  critical " },
               { "start": time+39.90,"end": time+40.40,"text": "support " },
               { "start": time+40.40,"end": time+40.90,"text": "systems " },
               { "start": time+40.90,"end": time+41.40,"text": "and " },
               { "start": time+41.20,"end": time+41.70,"text": "resources. " },

               { "start": time+43.00,"end": time+43.50,"text": "\n\nSocial " },
               { "start": time+43.50,"end": time+44.00,"text": "work  " },
               { "start": time+44.00,"end": time+44.50,"text": "studies " },
               { "start": time+44.50,"end": time+45.00,"text": "can " },
               { "start": time+45.00,"end": time+45.50,"text": "overlap " },
               { "start": time+45.50,"end": time+46.00,"text": "with  " },
               { "start": time+46.00,"end": time+46.50,"text": "a variety " },
               { "start": time+46.50,"end": time+47.00,"text": "of other " },
               { "start": time+47.00,"end": time+47.50,"text": "academic " },
               { "start": time+47.70,"end": time+48.30,"text": "disciplines " },
               { "start": time+49.00,"end": time+49.50,"text": "such " },
               { "start": time+49.30,"end": time+49.80,"text": "as " },
               { "start": time+50.00,"end": time+50.50,"text": "sociology, " },
               { "start": time+51.00,"end": time+51.50,"text": "history, " },
               { "start": time+51.50,"end": time+52.00,"text": "ethnic " },
               { "start": time+52.00,"end": time+52.50,"text": "studies, " },
               { "start": time+53.00,"end": time+53.50,"text": "anthro" },
               { "start": time+53.30,"end": time+53.80,"text": "pology, " },
               { "start": time+54.00,"end": time+54.50,"text": "political " },
               { "start": time+54.50,"end": time+55.00,"text": "science, " },
               { "start": time+55.50,"end": time+56.00,"text": "and " },
               { "start": time+56.00,"end": time+56.50,"text": "psychology " },
               { "start": time+57.00,"end": time+57.50,"text": "to name " },
               { "start": time+57.50,"end": time+58.00,"text": "just a few. " },
               { "start": time+58.50,"end": time+59.00,"text": "In many " },
               { "start": time+59.20,"end": time+60.00,"text": "countries, " },
               { "start": time+60.00,"end": time+60.50,"text": "like the US " },
               { "start": time+61.00,"end": time+61.50,"text": "and " },
               { "start": time+61.40,"end": time+62.00,"text": "the UK, " },
               { "start": time+62.30,"end": time+63.00,"text": "social " },
               { "start": time+62.70,"end": time+63.20,"text": "workers " },
               { "start": time+63.10,"end": time+63.60,"text": "must " },
               { "start": time+63.60,"end": time+64.10,"text": "receive " },
               { "start": time+64.00,"end": time+64.50,"text": "a license. " },
               { "start": time+65.00,"end": time+65.50,"text": "The " },
               { "start": time+65.30,"end": time+65.80,"text": "goal " },
               { "start": time+65.80,"end": time+66.30,"text": "is to " },
               { "start": time+66.50,"end": time+67.00,"text": "ensure " },
               { "start": time+66.90,"end": time+67.40,"text": "that " },
               { "start": time+67.20,"end": time+67.70,"text": "social " },
               { "start": time+67.50,"end": time+68.00,"text": "workers " },
               { "start": time+67.80,"end": time+68.30,"text": "can " },
               { "start": time+68.10,"end": time+68.60,"text": "best " },
               { "start": time+68.40,"end": time+68.90,"text": "serve  " },
               { "start": time+68.90,"end": time+69.40,"text": "their " },
               { "start": time+69.20,"end": time+69.70,"text": "clients " },
               { "start": time+69.70,"end": time+70.20,"text": "and " },
               { "start": time+70.00,"end": time+70.50,"text": "that " },
               { "start": time+70.50,"end": time+71.00,"text": "they " },
               { "start": time+70.70,"end": time+71.20,"text": "are " },
               { "start": time+70.90,"end": time+71.40,"text": "able to " },
               { "start": time+71.20,"end": time+71.70,"text": "act " },
               { "start": time+71.70,"end": time+72.20,"text": "ethically " },
               { "start": time+72.00,"end": time+72.50,"text": "and respo" },
               { "start": time+72.50,"end": time+73.00,"text": "nsibly. " },
               { "start": time+73.50,"end": time+74.00,"text": "Most " },
               { "start": time+74.00,"end": time+74.50,"text": "license " },
               { "start": time+74.50,"end": time+75.00,"text": "programs " },
               { "start": time+75.00,"end": time+75.50,"text": "include " },
               { "start": time+75.50,"end": time+76.00,"text": "areas " },
               { "start": time+76.10,"end": time+76.60,"text": "on " },
               { "start": time+76.50,"end": time+77.00,"text": "profe" },
               { "start": time+76.80,"end": time+77.30,"text": "ssional " },
               { "start": time+77.00,"end": time+77.50,"text": "integrity, " },
               { "start": time+78.00,"end": time+78.50,"text": "meaning " },
               { "start": time+78.30,"end": time+78.70,"text": "that social " },
               { "start": time+79.00,"end": time+79.50,"text": "workers " },
               { "start": time+79.40,"end": time+79.90,"text": "have " },
               { "start": time+79.70,"end": time+80.20,"text": "to be " },
               { "start": time+80.00,"end": time+80.50,"text": "reliable, " },
               { "start": time+81.00,"end": time+81.50,"text": "honest, " },
               { "start": time+81.50,"end": time+82.00,"text": "and " },
               { "start": time+82.00,"end": time+82.50,"text": "trust" },
               { "start": time+82.30,"end": time+82.80,"text": "worthy. " },
               { "start": time+83.00,"end": time+83.50,"text": "It is " },
               { "start": time+83.40,"end": time+83.90,"text": "a " },
               { "start": time+83.70,"end": time+84.20,"text": "good " },
               { "start": time+84.10,"end": time+84.60,"text": "idea " },
               { "start": time+84.60,"end": time+85.10,"text": "to get " },
               { "start": time+85.10,"end": time+85.60,"text": "a license, " },
               { "start": time+86.00,"end": time+86.50,"text": "but not " },
               { "start": time+86.50,"end": time+87.00,"text": "always " },
               { "start": time+87.00,"end": time+87.50,"text": "a requi" },
               { "start": time+87.40,"end": time+87.90,"text": "rement. " },

               { "start": time+88.80,"end": time+89.30,"text": "\n\nWhile " },
               { "start": time+89.10,"end": time+89.60,"text": "there " },
               { "start": time+89.40,"end": time+89.90,"text": "is " },
               { "start": time+89.70,"end": time+90.20,"text": "no " },
               { "start": time+90.00,"end": time+90.50,"text": "specific " },
               { "start": time+90.30,"end": time+90.80,"text": "set " },
               { "start": time+90.60,"end": time+91.10,"text": "of " },
               { "start": time+91.00,"end": time+91.50,"text": "rules " },
               { "start": time+91.30,"end": time+91.80,"text": "regarding " },
               { "start": time+91.60,"end": time+92.10,"text": "how " },
               { "start": time+92.00,"end": time+92.50,"text": "social " },
               { "start": time+92.30,"end": time+92.80,"text": "workers " },
               { "start": time+93.10,"end": time+93.60,"text": "are " },
               { "start": time+93.50,"end": time+94.00,"text": "expected " },
               { "start": time+94.00,"end": time+94.50,"text": "to work, " },
               { "start": time+95.00,"end": time+95.50,"text": "there " },
               { "start": time+95.30,"end": time+95.80,"text": "are " },
               { "start": time+95.50,"end": time+96.00,"text": "some " },
               { "start": time+96.00,"end": time+96.50,"text": "common " },
               { "start": time+96.40,"end": time+96.90,"text": "values. " },
               { "start": time+97.20,"end": time+97.70,"text": "They " },
               { "start": time+97.50,"end": time+98.00,"text": "are " },
               { "start": time+97.70,"end": time+98.20,"text": "expected " },
               { "start": time+98.00,"end": time+98.50,"text": "to " },
               { "start": time+98.40,"end": time+98.90,"text": "show " },
               { "start": time+98.90,"end": time+99.40,"text": "respect " },
               { "start": time+99.40,"end": time+99.90,"text": "for " },
               { "start": time+99.70,"end": time+100.20,"text": "human " },
               { "start": time+100.00,"end": time+100.50,"text": "rights " },
               { "start": time+100.50,"end": time+101.00,"text": "and " },
               { "start": time+101.00,"end": time+101.50,"text": "dignity " },
               { "start": time+101.50,"end": time+102.00,"text": "of " },
               { "start": time+101.70,"end": time+102.20,"text": "all " },
               { "start": time+102.00,"end": time+102.50,"text": "people. " },
               { "start": time+103.00,"end": time+103.50,"text": "Social " },
               { "start": time+103.50,"end": time+104.00,"text": "workers " },
               { "start": time+103.70,"end": time+104.20,"text": "are " },
               { "start": time+104.10,"end": time+104.60,"text": "usually " },
               { "start": time+104.50,"end": time+105.00,"text": "expected " },
               { "start": time+104.90,"end": time+105.40,"text": "to be " },
               { "start": time+105.20,"end": time+105.60,"text": "social " },
               { "start": time+105.50,"end": time+106.00,"text": "warriors, " },
               { "start": time+106.70,"end": time+107.20,"text": "promoting " },
               { "start": time+107.20,"end": time+107.70,"text": "social " },
               { "start": time+107.70,"end": time+108.20,"text": "justice " },
               { "start": time+108.50,"end": time+109.00,"text": "in relation " },
               { "start": time+108.90,"end": time+109.40,"text": "to the " },
               { "start": time+109.30,"end": time+109.80,"text": "people " },
               { "start": time+109.60,"end": time+110.10,"text": "they " },
               { "start": time+109.80,"end": time+110.30,"text": "work " },
               { "start": time+110.10,"end": time+110.60,"text": "with " },
               { "start": time+110.80,"end": time+111.30,"text": "and " },
               { "start": time+110.90,"end": time+111.40,"text": "the " },
               { "start": time+111.20,"end": time+111.70,"text": "community " },
               { "start": time+111.60,"end": time+112.10,"text": "at " },
               { "start": time+112.00,"end": time+112.50,"text": "large. " },
               { "start": time+113.00,"end": time+113.50,"text": "They " },
               { "start": time+113.50,"end": time+114.00,"text": "also " },
               { "start": time+114.00,"end": time+114.50,"text": "have to " },
               { "start": time+114.50,"end": time+115.00,"text": "avoid " },
               { "start": time+114.80,"end": time+115.30,"text": "conflicts " },
               { "start": time+115.10,"end": time+115.60,"text": "of " },
               { "start": time+115.50,"end": time+116.00,"text": "interest " },
               { "start": time+115.90,"end": time+116.40,"text": "with " },
               { "start": time+116.30,"end": time+116.80,"text": "other " },
               { "start": time+116.60,"end": time+117.10,"text": "clients " },
               { "start": time+117.10,"end": time+117.60,"text": "and " },
               { "start": time+117.60,"end": time+118.10,"text": "avoid " },
               { "start": time+118.10,"end": time+118.60,"text": "discri" },
               { "start": time+118.40,"end": time+118.90,"text": "minatory " },
               { "start": time+118.60,"end": time+119.10,"text": "or " },
               { "start": time+119.10,"end": time+119.60,"text": "oppre" },
               { "start": time+119.40,"end": time+119.90,"text": "ssive " },
               { "start": time+119.70,"end": time+120.20,"text": "practices. " },

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

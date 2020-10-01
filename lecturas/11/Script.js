
( function(win, doc) {
            var audioPlayer = doc.getElementById("music");
            var subtitles = doc.getElementById("subtitles");
						var time=5.50;  //Valor inicial de la variable de tiempo
						 var syncData =[
               { "start": time,"end": time+0.50,"text": "Is history " },                    //Parrafo 1
               { "start": time+0.50,"end": time+1.00,"text": "a science " },
               { "start": time+1.25,"end": time+1.75,"text": "or " },
               { "start": time+1.55,"end": time+2.05,"text": "an " },
               { "start": time+1.75,"end": time+2.25,"text": "art? " },
               { "start": time+2.75,"end": time+3.25,"text": "While " },
               { "start": time+3.05,"end": time+3.55,"text": "this " },
               { "start": time+3.30,"end": time+3.80,"text": "may seem " },
               { "start": time+3.90,"end": time+4.40,"text": "like a " },
               { "start": time+4.30,"end": time+4.80,"text": "simple " },
               { "start": time+4.55,"end": time+5.05,"text": "question, " },
               { "start": time+5.40,"end": time+5.90,"text": "there is " },
               { "start": time+5.80,"end": time+6.30,"text": "some " },
               { "start": time+6.20,"end": time+6.70,"text": "history " },
               { "start": time+6.90,"end": time+7.40,"text": "around " },
               { "start": time+7.40,"end": time+7.90,"text": "the discussion. " },
               { "start": time+8.80,"end": time+9.30,"text": "The " },
               { "start": time+9.20,"end": time+9.90,"text": "Academia " },
               { "start": time+9.90,"end": time+11.00,"text": "Europaea " },
               { "start": time+11.00,"end": time+11.50,"text": "categorizes " },
               { "start": time+11.70,"end": time+12.20,"text": "all " },
               { "start": time+11.95,"end": time+12.65,"text": "academic " },
               { "start": time+12.70,"end": time+13.60,"text": "disciplines " },
               { "start": time+13.55,"end": time+14.05,"text": "into " },
               { "start": time+13.90,"end": time+14.40,"text": "one " },
               { "start": time+14.30,"end": time+14.80,"text": "of " },
               { "start": time+14.70,"end": time+15.20,"text": "four " },
               { "start": time+14.90,"end": time+15.10,"text": "categories, " },
               { "start": time+16.275,"end": time+17.00,"text": "humanities, " },
               { "start": time+17.10,"end": time+17.60,"text": "social " },
               { "start": time+17.60,"end": time+18.10,"text": "sciencies, " },
               { "start": time+18.65,"end": time+19.15,"text": "natural " },
               { "start": time+19.10,"end": time+19.60,"text": "sciencies " },
               { "start": time+20.50,"end": time+21.00,"text": "and " },
               { "start": time+20.685,"end": time+21.185,"text": "life " },
               { "start": time+21.00,"end": time+21.50,"text": "sciencies. " },
               { "start": time+22.10,"end": time+22.60,"text": "You " },
               { "start": time+22.40,"end": time+22.90,"text": "may " },
               { "start": time+22.775,"end": time+23.275,"text": "notice " },
               { "start": time+23.00,"end": time+23.50,"text": "that " },
               { "start": time+23.30,"end": time+23.80,"text": "all of " },
               { "start": time+23.70,"end": time+24.20,"text": "the " },
               { "start": time+23.85,"end": time+24.35,"text": "areas, " },
               { "start": time+24.60,"end": time+25.10,"text": "except " },
               { "start": time+25.00,"end": time+25.50,"text": "for  " },
               { "start": time+25.30,"end": time+25.80,"text": "humanities, " },
               { "start": time+26.30,"end": time+26.80,"text": "include " },
               { "start": time+26.60,"end": time+27.10,"text": "the " },
               { "start": time+26.90,"end": time+27.40,"text": "word " },
               { "start": time+27.275,"end": time+27.775,"text": "sciencie. " },
               { "start": time+28.35,"end": time+29.00,"text": "However, " },
               { "start": time+29.00,"end": time+29.50,"text": "it is " },
               { "start": time+29.35,"end": time+29.85,"text": "clear " },
               { "start": time+29.90,"end": time+30.40,"text": "that " },
               { "start": time+30.05,"end": time+30.55,"text": "we " },
               { "start": time+30.25,"end": time+30.75,"text": "would " },
               { "start": time+30.65,"end": time+31.15,"text": "not " },
               { "start": time+31.00,"end": time+31.50,"text": "consider " },
               { "start": time+31.50,"end": time+32.00,"text": "everyone " },
               { "start": time+32.00,"end": time+32.50,"text": "involved " },
               { "start": time+32.40,"end": time+32.90,"text": "in these " },
               { "start": time+32.75,"end": time+33.25,"text": "four " },
               { "start": time+33.20,"end": time+33.70,"text": "areas " },
               { "start": time+34.00,"end": time+34.50,"text": "to be " },
               { "start": time+34.35,"end": time+34.85,"text": "\"scientist\". " },
               { "start": time+35.85,"end": time+36.35,"text": "History " },
               { "start": time+36.40,"end": time+36.90,"text": "is one " },
               { "start": time+37.00,"end": time+37.50,"text": "of those " },
               { "start": time+37.30,"end": time+37.90,"text": "hard to " },
               { "start": time+37.80,"end": time+38.30,"text": "define " },
               { "start": time+38.20,"end": time+38.70,"text": "areas. " },

               { "start": time+39.70,"end": time+40.20,"text": "\n\n One " },               //Parrafo 2
               { "start": time+40.00,"end": time+40.50,"text": "of the " },
               { "start": time+40.25,"end": time+40.75,"text": "reasons " },
               { "start": time+40.85,"end": time+41.35,"text": "it is " },
               { "start": time+41.25,"end": time+41.75,"text": "so hard " },
               { "start": time+41.65,"end": time+42.15,"text": "to define " },
               { "start": time+42.75,"end": time+43.25,"text": "is " },
               { "start": time+43.05,"end": time+43.55,"text": "because " },
               { "start": time+43.40,"end": time+43.90,"text": "of " },
               { "start": time+43.75,"end": time+44.25,"text": "perceptions " },
               { "start": time+44.50,"end": time+45.00,"text": "of " },
               { "start": time+44.80,"end": time+45.30,"text": "what " },
               { "start": time+45.00,"end": time+45.70,"text": "historians " },
               { "start": time+45.90,"end": time+46.40,"text": "should " },
               { "start": time+46.20,"end": time+46.70,"text": "do. " },
               { "start": time+47.10,"end": time+47.60,"text": "For " },
               { "start": time+47.50,"end": time+48.50,"text": "example, " },
               { "start": time+48.25,"end": time+48.75,"text": "the " },
               { "start": time+48.50,"end": time+49.00,"text": "German " },
               { "start": time+48.90,"end": time+49.40,"text": "and " },
               { "start": time+49.10,"end": time+49.60,"text": "Dutch " },
               { "start": time+49.35,"end": time+49.85,"text": "concepts " },
               { "start": time+50.10,"end": time+50.60,"text": "of  " },
               { "start": time+50.35,"end": time+50.85,"text": "history " },
               { "start": time+51.50,"end": time+52.00,"text": "were " },
               { "start": time+51.85,"end": time+52.35,"text": "originally " },
               { "start": time+52.55,"end": time+53.05,"text": "considered " },
               { "start": time+53.15,"end": time+53.65,"text": "a form " },
               { "start": time+53.60,"end": time+54.10,"text": "of " },
               { "start": time+53.75,"end": time+54.25,"text": "lite" },
               { "start": time+53.95,"end": time+54.45,"text": "rature, " },
               { "start": time+54.80,"end": time+55.30,"text": "not a " },
               { "start": time+55.15,"end": time+55.65,"text": "sciencie. " },
               { "start": time+56.45,"end": time+56.95,"text": "We can " },
               { "start": time+56.80,"end": time+57.30,"text": "even " },
               { "start": time+57.05,"end": time+57.55,"text": "look " },
               { "start": time+57.30,"end": time+57.80,"text": "at classic " },
               { "start": time+57.70,"end": time+58.20,"text": "historians " },
               { "start": time+58.80,"end": time+59.30,"text": "like " },
               { "start": time+59.05,"end": time+59.55,"text": "Livy " },
               { "start": time+59.80,"end": time+60.30,"text": "and " },
               { "start": time+60.10,"end": time+60.60,"text": "Tacitus. " },
               { "start": time+61.40,"end": time+61.90,"text": "These " },
               { "start": time+61.75,"end": time+62.25,"text": "historians " },
               { "start": time+62.50,"end": time+63.00,"text": "narrated " },
               { "start": time+63.25,"end": time+63.75,"text": "the events " },
               { "start": time+63.65,"end": time+64.25,"text": "of the past " },
               { "start": time+64.50,"end": time+65.00,"text": "as a " },
               { "start": time+64.65,"end": time+65.15,"text": "literary " },
               { "start": time+65.10,"end": time+65.60,"text": "form. " },
               { "start": time+66.50,"end": time+67.00,"text": "We can " },
               { "start": time+66.75,"end": time+67.25,"text": "even " },
               { "start": time+67.10,"end": time+67.60,"text": "look at " },
               { "start": time+67.50,"end": time+68.00,"text": "Machiavelli " },
               { "start": time+68.50,"end": time+69.00,"text": "and " },
               { "start": time+68.75,"end": time+69.25,"text": "Voltaire " },
               { "start": time+69.60,"end": time+70.10,"text": "in " },
               { "start": time+69.75,"end": time+70.25,"text": "their " },
               { "start": time+70.00,"end": time+70.50,"text": "times " },
               { "start": time+71.00,"end": time+71.50,"text": "they " },
               { "start": time+71.30,"end": time+71.80,"text": "were " },
               { "start": time+71.50,"end": time+72.00,"text": "known " },
               { "start": time+71.80,"end": time+72.30,"text": "as " },
               { "start": time+71.90,"end": time+72.40,"text": "historians " },
               { "start": time+72.60,"end": time+73.10,"text": "and " },
               { "start": time+72.80,"end": time+73.30,"text": "famous " },
               { "start": time+73.10,"end": time+73.60,"text": "writers " },
               { "start": time+73.75,"end": time+74.25,"text": "of all " },
               { "start": time+74.00,"end": time+74.50,"text": "different " },
               { "start": time+74.50,"end": time+75.00,"text": "genres " },
               { "start": time+75.35,"end": time+75.85,"text": "including " },
               { "start": time+75.75,"end": time+76.25,"text": "fiction. " },

               { "start": time+77.00,"end": time+77.50,"text": "\n\n Through the years, " },    //Parrafo 3
               { "start": time+77.50,"end": time+78.00,"text": "though, " },
               { "start": time+78.50,"end": time+79.00,"text": "the notion " },
               { "start": time+79.00,"end": time+79.50,"text": "of what " },
               { "start": time+79.20,"end": time+79.70,"text": "historians " },
               { "start": time+80.00,"end": time+80.50,"text": "do " },
               { "start": time+80.70,"end": time+81.20,"text": "has " },
               { "start": time+80.85,"end": time+81.35,"text": "changed. " },
               { "start": time+82.00,"end": time+82.50,"text": "Many " },
               { "start": time+82.25,"end": time+82.75,"text": "historians " },
               { "start": time+83.00,"end": time+83.50,"text": "argue that the field " },
               { "start": time+84.50,"end": time+85.00,"text": "needs " },
               { "start": time+84.70,"end": time+85.20,"text": "to be " },
               { "start": time+85.00,"end": time+85.50,"text": "more " },
               { "start": time+85.50,"end": time+86.00,"text": "scientific " },
               { "start": time+86.50,"end": time+87.00,"text": "and research " },
               { "start": time+87.00,"end": time+87.50,"text": "based. " },
               { "start": time+88.30,"end": time+89.20,"text": "Strict " },
               { "start": time+88.75,"end": time+89.25,"text": "believers " },
               { "start": time+89.50,"end": time+90.00,"text": "in the sciencie " },
               { "start": time+90.00,"end": time+90.50,"text": "of history " },
               { "start": time+91.00,"end": time+91.50,"text": "feel " },
               { "start": time+91.25,"end": time+91.75,"text": "that many " },
               { "start": time+91.50,"end": time+92.00,"text": "historians " },
               { "start": time+92.25,"end": time+92.75,"text": "receive " },
               { "start": time+92.75,"end": time+93.25,"text": "little " },
               { "start": time+93.25,"end": time+93.75,"text": "training " },
               { "start": time+93.75,"end": time+94.25,"text": "in scientist " },
               { "start": time+94.25,"end": time+94.75,"text": "methods. " },
               { "start": time+95.50,"end": time+96.00,"text": "Without " },
               { "start": time+96.00,"end": time+96.50,"text": "training, " },
               { "start": time+96.80,"end": time+97.30,"text": "history " },
               { "start": time+97.25,"end": time+97.75,"text": "can lead " },
               { "start": time+97.75,"end": time+98.25,"text": "to inaccurate " },
               { "start": time+98.50,"end": time+99.00,"text": "writing " },
               { "start": time+99.35,"end": time+99.85,"text": "and sometimes " },
               { "start": time+100.35,"end": time+100.85,"text": "history " },
               { "start": time+100.85,"end": time+101.35,"text": "becomes " },
               { "start": time+101.25,"end": time+101.75,"text": "merely " },
               { "start": time+101.75,"end": time+102.25,"text": "a list " },
               { "start": time+102.15,"end": time+102.65,"text": "of events. " },
               { "start": time+103.50,"end": time+104.00,"text": "By focusing " },
               { "start": time+104.25,"end": time+104.75,"text": "on precise " },
               { "start": time+105.00,"end": time+105.50,"text": "scientific " },
               { "start": time+105.50,"end": time+106.00,"text": "analysis " },
               { "start": time+106.75,"end": time+107.25,"text": "historians " },
               { "start": time+107.50,"end": time+108.00,"text": "provide " },
               { "start": time+108.00,"end": time+108.50,"text": "important " },
               { "start": time+108.50,"end": time+109.00,"text": "information " },
               { "start": time+109.50,"end": time+110.00,"text": "for later " },
               { "start": time+110.00,"end": time+110.50,"text": "generations. " },
               { "start": time+111.50,"end": time+112.00,"text": "Historians " },
               { "start": time+112.00,"end": time+112.50,"text": "describe " },
               { "start": time+112.80,"end": time+113.30,"text": "the time periods " },
               { "start": time+113.50,"end": time+114.00,"text": "in wich " },
               { "start": time+114.00,"end": time+114.50,"text": "events " },
               { "start": time+114.50,"end": time+115.00,"text": "ocurred " },
               { "start": time+115.50,"end": time+116.00,"text": "and how these " },
               { "start": time+116.00,"end": time+116.50,"text": "periods " },
               { "start": time+116.75,"end": time+117.25,"text": "fit whit " },
               { "start": time+117.25,"end": time+117.75,"text": "other events. " },
               { "start": time+118.70,"end": time+119.20,"text": "Research " },
               { "start": time+119.20,"end": time+119.70,"text": "historians " },
               { "start": time+120.00,"end": time+120.50,"text": "provide " },
               { "start": time+120.50,"end": time+121.00,"text": "key information " },
               { "start": time+121.40,"end": time+121.90,"text": "about " },
               { "start": time+121.65,"end": time+122.15,"text": "our " },
               { "start": time+121.75,"end": time+122.25,"text": "past " },
               { "start": time+123.00,"end": time+123.50,"text": "which helps us " },
               { "start": time+123.50,"end": time+124.00,"text": "understand " },
               { "start": time+124.25,"end": time+124.75,"text": "our present " },
               { "start": time+124.75,"end": time+125.25,"text": "and " },
               { "start": time+125.15,"end": time+125.65,"text": "future. " },

               { "start": time+126.75,"end": time+127.25,"text": "\n\n So " },              //Parrafo 4
               { "start": time+127.00,"end": time+127.50,"text": "which " },
               { "start": time+127.25,"end": time+127.75,"text": "side " },
               { "start": time+127.50,"end": time+128.00,"text": "is " },
               { "start": time+127.75,"end": time+128.25,"text": "correct? " },
               { "start": time+129.25,"end": time+129.75,"text": "There " },
               { "start": time+129.50,"end": time+130.00,"text": "is some " },
               { "start": time+129.80,"end": time+130.30,"text": "grey " },
               { "start": time+130.25,"end": time+130.75,"text": "area " },
               { "start": time+130.75,"end": time+131.25,"text": "here, " },
               { "start": time+131.50,"end": time+132.00,"text": "with " },
               { "start": time+131.75,"end": time+132.25,"text": "both " },
               { "start": time+132.00,"end": time+132.50,"text": "answers " },
               { "start": time+132.60,"end": time+133.10,"text": "being " },
               { "start": time+132.75,"end": time+133.25,"text": "correct " },
               { "start": time+133.35,"end": time+133.85,"text": "in different " },
               { "start": time+133.75,"end": time+134.25,"text": "circumstances. " },
               { "start": time+135.50,"end": time+136.00,"text": "Historians " },
               { "start": time+136.25,"end": time+136.75,"text": "can take " },
               { "start": time+136.65,"end": time+137.15,"text": "part " },
               { "start": time+137.15,"end": time+137.65,"text": "in scientific " },
               { "start": time+137.75,"end": time+138.25,"text": "research " },
               { "start": time+138.50,"end": time+139.00,"text": "and studies, " },
               { "start": time+139.75,"end": time+140.25,"text": "though they have " },
               { "start": time+140.35,"end": time+140.85,"text": "also " },
               { "start": time+140.75,"end": time+141.25,"text": "won " },
               { "start": time+141.50,"end": time+142.00,"text": "prizes " },
               { "start": time+142.00,"end": time+142.50,"text": "in literature. " },
               { "start": time+143.50,"end": time+144.00,"text": "Some " },
               { "start": time+143.80,"end": time+144.20,"text": "historical " },
               { "start": time+144.50,"end": time+145.00,"text": "writing " },
               { "start": time+145.00,"end": time+145.50,"text": "is based " },
               { "start": time+145.50,"end": time+146.00,"text": "on research " },
               { "start": time+146.50,"end": time+147.00,"text": "and ideally " },
               { "start": time+147.00,"end": time+147.50,"text": "used " },
               { "start": time+147.50,"end": time+148.00,"text": "for research, " },
               { "start": time+149.00,"end": time+149.50,"text": "while " },
               { "start": time+149.25,"end": time+149.75,"text": "other " },
               { "start": time+149.50,"end": time+150.00,"text": "writing " },
               { "start": time+150.00,"end": time+150.50,"text": "may focus " },
               { "start": time+150.35,"end": time+150.85,"text": "on " },
               { "start": time+150.85,"end": time+151.35,"text": "entertainment. " },
               { "start": time+152.50,"end": time+153.00,"text": "The truth " },
               { "start": time+152.75,"end": time+153.25,"text": "is " },
               { "start": time+153.50,"end": time+154.00,"text": "that History " },
               { "start": time+154.00,"end": time+154.50,"text": "can be " },
               { "start": time+154.25,"end": time+154.75,"text": "both " },
               { "start": time+154.75,"end": time+155.25,"text": "a science " },
               { "start": time+155.65,"end": time+156.15,"text": "and an " },
               { "start": time+156.15,"end": time+156.65,"text": "art " },
               { "start": time+156.75,"end": time+157.25,"text": "depending " },
               { "start": time+157.25,"end": time+157.75,"text": "on how " },
               { "start": time+157.75,"end": time+158.25,"text": "we look it. " },



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

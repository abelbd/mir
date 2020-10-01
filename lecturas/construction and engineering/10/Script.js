
( function(win, doc) {
            var audioPlayer = doc.getElementById("music");
            var subtitles = doc.getElementById("subtitles");
						var time=7.0;
						 var syncData =[
               { "start": time,"end": time+0.50,"text": "During " },
               { "start": time+0.50,"end": time+1.00,"text": "the winter " },
               { "start": time+1.00,"end": time+1.50,"text": "- " },
               { "start": time+1.50,"end": time+2.00,"text": "1887 " },
               { "start": time+2.00,"end": time+2.50,"text": "to " },
               { "start": time+2.50,"end": time+3.00,"text": "18" },
               { "start": time+3.00,"end": time+3.50,"text": "88 " },
               { "start": time+3.60,"end": time+4.10,"text": "American " },
               { "start": time+4.20,"end": time+4.70,"text": "Engineer " },
               { "start": time+5.20,"end": time+5.70,"text": "Charles " },
               { "start": time+5.70,"end": time+6.20,"text": "Brush " },
               { "start": time+6.60,"end": time+7.10,"text": "finalized " },
               { "start": time+7.10,"end": time+7.60,"text": "the " },
               { "start": time+7.50,"end": time+8.00,"text": "world's " },
               { "start": time+8.00,"end": time+8.50,"text": "first " },
               { "start": time+8.50,"end": time+9.00,"text": "automatic " },
               { "start": time+9.00,"end": time+9.50,"text": "wind " },
               { "start": time+9.30,"end": time+9.80,"text": "turbine " },
               { "start": time+10.00,"end": time+10.50,"text": "to produce " },
               { "start": time+10.50,"end": time+11.00,"text": "electricity. " },
               { "start": time+12.00,"end": time+12.50,"text": "The " },
               { "start": time+12.30,"end": time+12.80,"text": "turbine " },
               { "start": time+12.60,"end": time+13.10,"text": "was " },
               { "start": time+13.00,"end": time+13.60,"text": "enormous. " },
               { "start": time+14.30,"end": time+14.80,"text": "With " },
               { "start": time+14.60,"end": time+15.30,"text": "a rotor " },
               { "start": time+15.30,"end": time+15.80,"text": "diameter " },
               { "start": time+16.00,"end": time+16.50,"text": "of 17 " },
               { "start": time+16.50,"end": time+17.00,"text": "m " },
               { "start": time+17.50,"end": time+18.00,"text": "and " },
               { "start": time+18.00,"end": time+18.50,"text": "144 " },
               { "start": time+19.00,"end": time+19.50,"text": "rotor " },
               { "start": time+19.50,"end": time+20.00,"text": "blades, " },
               { "start": time+20.70,"end": time+21.20,"text": "it was " },
               { "start": time+21.10,"end": time+21.60,"text": "the " },
               { "start": time+21.60,"end": time+22.10,"text": "largest " },
               { "start": time+22.10,"end": time+22.60,"text": "in the " },
               { "start": time+22.55,"end": time+23.15,"text": "world. " },
               { "start": time+23.90,"end": time+24.40,"text": "(Can you " },
               { "start": time+24.10,"end": time+24.60,"text": "see " },
               { "start": time+24.60,"end": time+25.10,"text": "the person " },
               { "start": time+25.00,"end": time+25.50,"text": "in the " },
               { "start": time+25.50,"end": time+26.00,"text": "picture?) " },
               { "start": time+27.00,"end": time+27.50,"text": "Despite " },
               { "start": time+27.50,"end": time+28.00,"text": "the size " },
               { "start": time+27.80,"end": time+28.30,"text": "of the " },
               { "start": time+28.10,"end": time+28.60,"text": "turbine, " },
               { "start": time+28.80,"end": time+29.30,"text": "it was " },
               { "start": time+29.50,"end": time+30.00,"text": "a 12 " },
               { "start": time+30.00,"end": time+30.50,"text": "kW " },
               { "start": time+30.50,"end": time+31.00,"text": "model. " },
               { "start": time+32.00,"end": time+32.50,"text": "There " },
               { "start": time+32.30,"end": time+32.80,"text": "is  " },
               { "start": time+32.70,"end": time+33.30,"text": "a small " },
               { "start": time+33.10,"end": time+33.65,"text": "fraction " },
               { "start": time+33.80,"end": time+34.30,"text": "of " },
               { "start": time+34.10,"end": time+34.60,"text": "modern " },
               { "start": time+34.60,"end": time+35.20,"text": "wind " },
               { "start": time+34.90,"end": time+35.50,"text": "turbines " },
               { "start": time+35.40,"end": time+35.90,"text": "which " },
               { "start": time+35.85,"end": time+36.35,"text": "range " },
               { "start": time+36.20,"end": time+36.70,"text": "from " },
               { "start": time+36.55,"end": time+37.05,"text": "2.5 " },
               { "start": time+37.20,"end": time+37.70,"text": "-" },
               { "start": time+37.70,"end": time+38.20,"text": "3 " },
               { "start": time+38.20,"end": time+38.70,"text": "MW " },
               { "start": time+38.70,"end": time+39.20,"text": "each. " },
               { "start": time+40.00,"end": time+40.50,"text": "Modern " },
               { "start": time+40.50,"end": time+41.00,"text": "wind " },
               { "start": time+40.90,"end": time+41.40,"text": "turbines " },
               { "start": time+41.60,"end": time+42.10,"text": "are " },
               { "start": time+41.90,"end": time+42.40,"text": "arranged " },
               { "start": time+42.30,"end": time+42.80,"text": "stra" },
               { "start": time+42.60,"end": time+43.10,"text": "tegically " },
               { "start": time+43.50,"end": time+44.00,"text": "to collect " },
               { "start": time+44.00,"end": time+44.50,"text": "as " },
               { "start": time+44.30,"end": time+44.80,"text": "much " },
               { "start": time+44.60,"end": time+45.10,"text": "wind " },
               { "start": time+45.10,"end": time+45.60,"text": "as " },
               { "start": time+45.40,"end": time+45.90,"text": "possible " },
               { "start": time+45.90,"end": time+46.40,"text": "in " },
               { "start": time+46.10,"end": time+46.60,"text": "wind " },
               { "start": time+46.30,"end": time+46.80,"text": "farms. " },
               { "start": time+47.50,"end": time+48.00,"text": "If " },
               { "start": time+47.80,"end": time+48.30,"text": "turbines " },
               { "start": time+48.50,"end": time+49.00,"text": "are " },
               { "start": time+48.80,"end": time+49.30,"text": "too " },
               { "start": time+49.00,"end": time+49.50,"text": "close " },
               { "start": time+49.20,"end": time+49.70,"text": "to " },
               { "start": time+49.35,"end": time+49.85,"text": "each " },
               { "start": time+49.55,"end": time+50.05,"text": "other, " },
               { "start": time+50.30,"end": time+50.80,"text": "efficiency " },
               { "start": time+50.70,"end": time+51.20,"text": "is " },
               { "start": time+51.00,"end": time+51.50,"text": "reduced. " },
               { "start": time+52.50,"end": time+53.00,"text": "The " },
               { "start": time+52.65,"end": time+53.15,"text": "most " },
               { "start": time+53.00,"end": time+53.50,"text": "productive " },
               { "start": time+53.50,"end": time+54.00,"text": "wind " },
               { "start": time+53.70,"end": time+54.20,"text": "farm " },
               { "start": time+54.20,"end": time+54.70,"text": "in " },
               { "start": time+54.50,"end": time+55.00,"text": "20" },
               { "start": time+55.00,"end": time+55.50,"text": "17 " },
               { "start": time+55.80,"end": time+56.30,"text": "was " },
               { "start": time+56.10,"end": time+56.60,"text": "in " },
               { "start": time+56.40,"end": time+56.90,"text": "China, " },
               { "start": time+57.50,"end": time+58.00,"text": "the " },
               { "start": time+57.80,"end": time+58.30,"text": "Gansu " },
               { "start": time+58.20,"end": time+58.70,"text": "wind " },
               { "start": time+58.50,"end": time+59.00,"text": "farm " },
               { "start": time+59.30,"end": time+59.80,"text": "had " },
               { "start": time+59.70,"end": time+60.30,"text": "a capacity " },
               { "start": time+60.30,"end": time+60.80,"text": "of " },
               { "start": time+60.60,"end": time+61.10,"text": "more " },
               { "start": time+61.00,"end": time+61.50,"text": "than " },
               { "start": time+61.30,"end": time+61.80,"text": "6 " },
               { "start": time+61.60,"end": time+62.10,"text": "MW. " },
               { "start": time+63.30,"end": time+63.80,"text": "They " },
               { "start": time+63.60,"end": time+64.10,"text": "also " },
               { "start": time+64.10,"end": time+64.60,"text": "only " },
               { "start": time+64.60,"end": time+65.10,"text": "have " },
               { "start": time+65.10,"end": time+65.60,"text": "1" },
               { "start": time+65.40,"end": time+65.90,"text": "-3 " },
               { "start": time+65.90,"end": time+66.40,"text": "blades " },
               { "start": time+66.30,"end": time+66.80,"text": "typically, " },
               { "start": time+67.40,"end": time+67.90,"text": "though " },
               { "start": time+67.60,"end": time+68.10,"text": "there " },
               { "start": time+67.80,"end": time+68.30,"text": "are " },
               { "start": time+68.10,"end": time+68.60,"text": "some " },
               { "start": time+68.50,"end": time+69.00,"text": "variations " },
               { "start": time+69.00,"end": time+69.50,"text": "of " },
               { "start": time+69.30,"end": time+69.80,"text": "vertical " },
               { "start": time+69.80,"end": time+70.30,"text": "turbines " },
               { "start": time+70.60,"end": time+71.10,"text": "that " },
               { "start": time+70.90,"end": time+71.40,"text": "have " },
               { "start": time+71.20,"end": time+71.70,"text": "more. " },
               { "start": time+73.10,"end": time+73.60,"text": "Turbine " },
               { "start": time+73.40,"end": time+73.90,"text": "design " },
               { "start": time+74.20,"end": time+74.70,"text": "is " },
               { "start": time+74.45,"end": time+74.95,"text": "quite " },
               { "start": time+74.70,"end": time+75.30,"text": "complicated " },
               { "start": time+75.40,"end": time+75.90,"text": "as " },
               { "start": time+75.70,"end": time+76.20, "text": "wind " },
               { "start": time+76.00,"end": time+76.50,"text": "is " },
               { "start": time+76.30,"end": time+76.80,"text": "not " },
               { "start": time+76.60,"end": time+77.10,"text": "constant. " },
               { "start": time+78.20,"end": time+78.70,"text": "Also " },
               { "start": time+79.00,"end": time+79.80,"text": "the " },
               { "start": time+79.20,"end": time+79.70,"text": "design " },
               { "start": time+79.40,"end": time+79.90,"text": "of " },
               { "start": time+79.60,"end": time+80.10,"text": "the " },
               { "start": time+79.80,"end": time+80.30,"text": "turbine " },
               { "start": time+80.40,"end": time+80.90,"text": "affects " },
               { "start": time+80.80,"end": time+81.30,"text": "the " },
               { "start": time+81.10,"end": time+81.60,"text": "wind " },
               { "start": time+81.40,"end": time+81.90,"text": "it " },
               { "start": time+81.55,"end": time+82.05,"text": "is " },
               { "start": time+81.80,"end": time+82.30,"text": "capturing. " },
               { "start": time+83.00,"end": time+83.50,"text": "Most " },
               { "start": time+83.50,"end": time+84.00,"text": "modern " },
               { "start": time+84.00,"end": time+84.50,"text": "turbines " },
               { "start": time+84.60,"end": time+85.10,"text": "can " },
               { "start": time+84.90,"end": time+85.40,"text": "generate " },
               { "start": time+85.40,"end": time+85.90,"text": "electricity " },
               { "start": time+86.40,"end": time+86.90,"text": "with " },
               { "start": time+86.60,"end": time+87.10,"text": "a " },
               { "start": time+86.90,"end": time+87.40,"text": "minimum " },
               { "start": time+87.40,"end": time+87.90,"text": "speed " },
               { "start": time+88.10,"end": time+88.60,"text": "of " },
               { "start": time+88.40,"end": time+88.90,"text": "3 " },
               { "start": time+88.70,"end": time+89.30,"text": "m" },
               { "start": time+89.20,"end": time+89.70,"text": "/" },
               { "start": time+89.50,"end": time+90.00,"text": "s. " },
               { "start": time+90.95,"end": time+91.45,"text": "But " },
               { "start": time+91.15,"end": time+91.65,"text": "did " },
               { "start": time+91.45,"end": time+91.95,"text": "you " },
               { "start": time+91.60,"end": time+92.10,"text": "know " },
               { "start": time+92.00,"end": time+92.50,"text": "that " },
               { "start": time+92.25,"end": time+92.75,"text": "there " },
               { "start": time+92.35,"end": time+92.85,"text": "is " },
               { "start": time+92.55,"end": time+93.05,"text": "a " },
               { "start": time+92.80,"end": time+93.30,"text": "maximum " },
               { "start": time+93.30,"end": time+93.80,"text": "speed " },
               { "start": time+93.50,"end": time+94.00,"text": "as " },
               { "start": time+93.80,"end": time+94.40,"text": "well? " },
               { "start": time+94.80,"end": time+95.30,"text": "Usually " },
               { "start": time+95.40,"end": time+95.90,"text": "about " },
               { "start": time+95.80,"end": time+96.30,"text": "25 " },
               { "start": time+96.50,"end": time+97.00,"text": "m/s. " },
               { "start": time+98.90,"end": time+99.40,"text": "This " },
               { "start": time+99.15,"end": time+99.65,"text": "is " },
               { "start": time+99.40,"end": time+99.90,"text": "because " },
               { "start": time+99.70,"end": time+100.20,"text": "the " },
               { "start": time+99.95,"end": time+100.50,"text": "power " },
               { "start": time+100.40,"end": time+100.90,"text": "of " },
               { "start": time+100.70,"end": time+101.20,"text": "wind " },
               { "start": time+101.05,"end": time+101.55,"text": "increases " },
               { "start": time+101.90,"end": time+102.50,"text": "by " },
               { "start": time+102.10,"end": time+102.60,"text": "the " },
               { "start": time+102.35,"end": time+103.00,"text": "cube " },
               { "start": time+102.80,"end": time+103.30,"text": "of " },
               { "start": time+103.10,"end": time+103.60,"text": "the " },
               { "start": time+103.35,"end": time+103.90,"text": "wind " },
               { "start": time+103.70,"end": time+104.20,"text": "speed. " },
               { "start": time+104.90,"end": time+105.40,"text": "Turbines " },
               { "start": time+105.30,"end": time+105.80,"text": "are " },
               { "start": time+105.60,"end": time+106.10,"text": "designed " },
               { "start": time+106.20,"end": time+106.70,"text": "with " },
               { "start": time+106.60,"end": time+107.10,"text": "electrical " },
               { "start": time+107.30,"end": time+107.80,"text": "and " },
               { "start": time+107.50,"end": time+108.00,"text": "mechanical " },
               { "start": time+108.00,"end": time+108.50,"text": "braking " },
               { "start": time+108.50,"end": time+109.00,"text": "systems " },
               { "start": time+109.50,"end": time+110.00,"text": "to " },
               { "start": time+109.75,"end": time+110.25,"text": "slow " },
               { "start": time+110.10,"end": time+110.60,"text": "down " },
               { "start": time+110.40,"end": time+110.90,"text": "their " },
               { "start": time+110.60,"end": time+111.10,"text": "speed. " },
               { "start": time+111.90,"end": time+112.40,"text": "For " },
               { "start": time+112.20,"end": time+112.70,"text": "industrial " },
               { "start": time+112.70,"end": time+113.20,"text": "turbines, " },
               { "start": time+113.30,"end": time+113.80,"text": "electrical " },
               { "start": time+113.80,"end": time+114.30,"text": "generators " },
               { "start": time+114.60,"end": time+115.10,"text": "are " },
               { "start": time+114.90,"end": time+115.40,"text": "placed " },
               { "start": time+115.30,"end": time+115.80,"text": "at " },
               { "start": time+115.55,"end": time+116.05,"text": "the " },
               { "start": time+115.90,"end": time+116.40,"text": "top " },
               { "start": time+116.05,"end": time+116.65,"text": "of " },
               { "start": time+116.20,"end": time+116.70,"text": "the " },
               { "start": time+116.40,"end": time+116.90,"text": "tower. " },
               { "start": time+117.20,"end": time+117.70,"text": "These " },
               { "start": time+117.60,"end": time+118.10,"text": "are " },
               { "start": time+117.90,"end": time+118.40,"text": "typically " },
               { "start": time+118.40,"end": time+118.90,"text": "connected " },
               { "start": time+119.00,"end": time+119.50,"text": "to a " },
               { "start": time+119.40,"end": time+119.90,"text": "wider " },
               { "start": time+119.80,"end": time+120.30,"text": "electrical " },
               { "start": time+120.30,"end": time+120.80,"text": "grid. " },
               { "start": time+121.80,"end": time+122.30,"text": "When " },
               { "start": time+122.10,"end": time+122.60,"text": "wind " },
               { "start": time+122.40,"end": time+122.90,"text": "speeds " },
               { "start": time+122.60,"end": time+123.30,"text": "are " },
               { "start": time+122.90,"end": time+123.40,"text": "high, " },
               { "start": time+123.60,"end": time+124.10,"text": "electrical " },
               { "start": time+124.10,"end": time+124.60,"text": "companies " },
               { "start": time+124.80,"end": time+125.30,"text": "that " },
               { "start": time+125.10,"end": time+125.60,"text": "use " },
               { "start": time+125.40,"end": time+125.90,"text": "these " },
               { "start": time+125.80,"end": time+126.30,"text": "farms " },
               { "start": time+126.40,"end": time+126.90,"text": "will " },
               { "start": time+126.60,"end": time+127.20,"text": "typically " },
               { "start": time+127.30,"end": time+127.80,"text": "limit " },
               { "start": time+127.90,"end": time+128.40,"text": "the " },
               { "start": time+128.10,"end": time+128.60,"text": "power " },
               { "start": time+128.45,"end": time+128.95,"text": "produced " },
               { "start": time+128.90,"end": time+129.50,"text": "from " },
               { "start": time+129.20,"end": time+129.70,"text": "hydro" },
               { "start": time+129.70,"end": time+130.20,"text": "electric " },
               { "start": time+130.20,"end": time+130.70,"text": "dams " },
               { "start": time+131.45,"end": time+131.95,"text": "by " },
               { "start": time+131.80,"end": time+132.30,"text": "retaining " },
               { "start": time+132.30,"end": time+132.80,"text": "water, " },
               { "start": time+133.50,"end": time+134.00,"text": "or " },
               { "start": time+133.80,"end": time+134.30,"text": "limit " },
               { "start": time+134.10,"end": time+134.60,"text": "other " },
               { "start": time+134.40,"end": time+134.90,"text": "production " },
               { "start": time+135.10,"end": time+135.60,"text": "like " },
               { "start": time+135.40,"end": time+135.90,"text": "coal, " },
               { "start": time+136.15,"end": time+136.65,"text": "natural " },
               { "start": time+136.60,"end": time+137.10,"text": "gas " },
               { "start": time+137.30,"end": time+137.80,"text": "or " },
               { "start": time+137.60,"end": time+138.10,"text": "nuclear " },
               { "start": time+138.00,"end": time+138.50,"text": "power. " },
               { "start": time+139.20,"end": time+139.70,"text": "One " },
               { "start": time+139.50,"end": time+140.00,"text": "of the " },
               { "start": time+139.80,"end": time+140.30,"text": "biggest " },
               { "start": time+140.25,"end": time+140.80,"text": "challenges " },
               { "start": time+141.10,"end": time+141.60,"text": "of " },
               { "start": time+141.40,"end": time+141.90,"text": "wind " },
               { "start": time+141.90,"end": time+142.40,"text": "and " },
               { "start": time+142.15,"end": time+142.70,"text": "other " },
               { "start": time+142.50,"end": time+143.00,"text": "renewable " },
               { "start": time+143.00,"end": time+143.50,"text": "energy " },
               { "start": time+143.50,"end": time+144.00,"text": "sources " },
               { "start": time+144.30,"end": time+144.80,"text": "is the " },
               { "start": time+144.70,"end": time+145.20,"text": "ability " },
               { "start": time+145.20,"end": time+145.70,"text": "to " },
               { "start": time+145.40,"end": time+145.90,"text": "store " },
               { "start": time+145.80,"end": time+146.30,"text": "power " },
               { "start": time+146.20,"end": time+146.70,"text": "long " },
               { "start": time+146.50,"end": time+147.00,"text": "term " },
               { "start": time+147.10,"end": time+147.60,"text": "with " },
               { "start": time+147.40,"end": time+147.90,"text": "efficient " },
               { "start": time+147.90,"end": time+148.40,"text": "batteries. " },
               { "start": time+149.60,"end": time+150.10,"text": "Tesla " },
               { "start": time+150.00,"end": time+150.50,"text": "has " },
               { "start": time+150.30,"end": time+150.80,"text": "a " },
               { "start": time+150.50,"end": time+151.00,"text": "deal " },
               { "start": time+150.75,"end": time+151.30,"text": "with " },
               { "start": time+150.95,"end": time+151.50,"text": "Australia " },
               { "start": time+151.80,"end": time+152.30,"text": "to produce " },
               { "start": time+152.30,"end": time+152.80,"text": "the " },
               { "start": time+152.60,"end": time+153.10,"text": "world's " },
               { "start": time+153.00,"end": time+153.50,"text": "largest " },
               { "start": time+153.50,"end": time+154.00,"text": "battery " },
               { "start": time+154.45,"end": time+154.95,"text": "(100 " },
               { "start": time+154.90,"end": time+155.40,"text": "MW) " },
               { "start": time+156.65,"end": time+157.15,"text": "but " },
               { "start": time+157.00,"end": time+157.50,"text": "will " },
               { "start": time+157.20,"end": time+157.80,"text": "this " },
               { "start": time+157.50,"end": time+158.00,"text": "be " },
               { "start": time+157.70,"end": time+158.20,"text": "the " },
               { "start": time+157.90,"end": time+158.40,"text": "future " },
               { "start": time+158.30,"end": time+158.80,"text": "of " },
               { "start": time+158.50,"end": time+159.00,"text": "wind " },
               { "start": time+158.80,"end": time+159.30,"text": "technology? " },
               { "start": time+160.40,"end": time+160.90,"text": "What " },
               { "start": time+160.65,"end": time+161.15,"text": "do " },
               { "start": time+160.80,"end": time+161.30,"text": "you " },
               { "start": time+161.00,"end": time+161.50,"text": "think " },
               { "start": time+161.30,"end": time+161.80,"text": "about " },
               { "start": time+161.50,"end": time+162.00,"text": "the " },
               { "start": time+161.70,"end": time+162.20,"text": "future " },
               { "start": time+162.10,"end": time+162.60,"text": "of " },
               { "start": time+162.30,"end": time+162.80,"text": "wind " },
               { "start": time+162.80,"end": time+163.30,"text": "or " },
               { "start": time+163.10,"end": time+163.60,"text": "other " },
               { "start": time+163.40,"end": time+163.90,"text": "renewable " },
               { "start": time+163.90,"end": time+164.40,"text": "energy " },
               { "start": time+164.25,"end": time+164.80,"text": "sources? " },
               { "start": time+165.60,"end": time+166.10,"text": "Drop " },
               { "start": time+165.80,"end": time+166.30,"text": "us " },
               { "start": time+166.10,"end": time+166.60,"text": "a " },
               { "start": time+166.30,"end": time+166.80,"text": "line! " },



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
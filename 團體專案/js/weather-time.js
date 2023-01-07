const boxCard = document.querySelectorAll('.text-word')
        const date = document.querySelectorAll('.date')

        date.forEach(function(data,i){
            data.innerHTML = `${moment().add(i, 'days').format('MMM Do')}`;
        });
        // boxCard.forEach(function(data){
        //     data.addEventListener('click', function(){ 
                
        //     });
        // });
        // 溫度
        fetch('https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-D0047-075?Authorization=CWB-5D5EDAAC-3681-4662-A366-44AF14D55F4A').then(function(response){
            return response.json();
        }).then(function(data){
            // console.log(data.records.locations[0].location[25].weatherElement[6].time);
            // console.log(data.records.locations[0].location[25].weatherElement[6].time[0].elementValue[1].value);
            
           

            const weatherImage = document.querySelectorAll('.weather-image')
            const weatherImg = document.querySelector('.weather-img')
            const temptureToday = document.querySelector('.tempture')
            
            
            // function內的data取名要注意,data到底是哪一個?
            weatherImage.forEach(function(image, index){
                // console.log(index);
                let weatherValue = parseInt(data.records.locations[0].location[25].weatherElement[6].time[index].elementValue[1].value)
                // console.log(weatherValue);
                let img;
                if(weatherValue > 0  && weatherValue <= 3){
                img = './img/04.素材/潮汐時間/晴天圖.png'
                }else if(weatherValue > 3  && weatherValue <= 5) {
                img = './img/04.素材/潮汐時間/多雲圖.png'
                }else {
                img = './img/04.素材/潮汐時間/多雲圖.png'
                }

                image.innerHTML = `<img src="${img}" alt="">`
                weatherImg.innerHTML = `<img src="${img}" alt="">`
            });
            // 可以執行的
            // weatherImage.forEach(function(image, index){
            //     console.log(index);
            //     let weatherValue = parseInt(data.records.locations[0].location[25].weatherElement[6].time[index*2].elementValue[1].value)
            //     console.log(weatherValue);
            //     let img;
            //     if(weatherValue > 0  && weatherValue <= 3){
            //     img = './img/04.素材/潮汐時間/晴天圖.png'
            //     }else if(weatherValue > 3  && weatherValue <= 5) {
            //     img = './img/04.素材/潮汐時間/多雲圖.png'
            //     }else {
            //     img = './img/04.素材/潮汐時間/多雲圖.png'
            //     }
            //     image.innerHTML = `<img src="${img}" alt="">`
            // });
            const textWord = document.querySelectorAll('.temp')
            textWord.forEach(function(card, index){
                
                card.innerHTML = `${data.records.locations[0].location[25].weatherElement[1].time[index * 2].elementValue[0].value}℃` 
                temptureToday.innerHTML = `${data.records.locations[0].location[25].weatherElement[1].time[index * 2].elementValue[0].value}℃`   
            });
        });
        // 日升日落
        fetch('https://opendata.cwb.gov.tw/api/v1/rest/datastore/A-B0062-001?Authorization=CWB-5D5EDAAC-3681-4662-A366-44AF14D55F4A&locationName=%E8%87%BA%E4%B8%AD%E5%B8%82&timeFrom=2023-01-01').then(function(response){
            return response.json();
        }).then(function(data){
            let todayIndex = data.records.locations.location[0].time.indexOf(data.records.locations.location[0].time.filter(obj => obj.dataTime == `${moment().format().slice(0, 10)}`)[0]) 
            // 日出時間
            let sunRise = data.records.locations.location[0].time[todayIndex].parameter[1].parameterValue
            // 日落時間
            let sunDown = data.records.locations.location[0].time[todayIndex].parameter[5].parameterValue

            const infoSunRise = document.querySelector('.sun-rise')
            const infoSunDown = document.querySelector('.sun-down')

            infoSunRise.innerHTML = `日出時刻: ${sunRise}`
            infoSunDown.innerHTML = `日落時刻: ${sunDown}`

        });
        // 月升月落
        fetch('https://opendata.cwb.gov.tw/api/v1/rest/datastore/A-B0063-001?Authorization=CWB-5D5EDAAC-3681-4662-A366-44AF14D55F4A&locationName=%E8%87%BA%E4%B8%AD%E5%B8%82&timeFrom=2023-01-01&timeTo=2023-01-20').then(function(response){
            return response.json();
        }).then(function(data){
            let todayMoonIndex = data.records.locations.location[0].time.indexOf(data.records.locations.location[0].time.filter(obj => obj.dataTime == `${moment().format().slice(0, 10)}`)[0])
            let moonRise = data.records.locations.location[0].time[todayMoonIndex].parameter[0].parameterValue
            let moonDown = data.records.locations.location[0].time[todayMoonIndex].parameter[4].parameterValue
            
            const infoMoonRise = document.querySelector('.moon-rise')
            const infoMoonDown = document.querySelector('.moon-down')

            infoMoonRise.innerHTML = `月出時刻: ${moonRise}`
            infoMoonDown.innerHTML = `月落時刻: ${moonDown}`
        });
        // 潮汐
        // fetch('')
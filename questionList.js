const questionList = [
    {
        "Category": "General",
        "List": [
            new Question("'Kızıl Gezegen' genellikle hangisi için yapılan bir benzetme olur?", { a: "Kripton", b: "Cyberton", c: "Mars", d: "Vulcan" }, "c"),
            new Question("Hangisi, Iron Man adlı çizgi roman kahramanını beyaz perdede canlandırmıştır?", { a: "Jake Gyllenhall", b: "Robert Downey Jr.", c: "Benedict Cumberbatch", d: "Chris Hemsworth" }, "b"),
            new Question("Anakin Skywalker, Leia Organa ve Kont Dooku hangi film serisinde yer alan karakterlerdir?", { a: "Star Wars", b: "Avengers", c: "Lord of The Rings", d: "Cennet Mahallesi" }, "a"),
            new Question("Dört farklı coğrafi bölgede toprağı bulunan tek Türkiye ili hangisidir?", { a: "İstanbul", b: "Kahramanmaraş", c: "Bilecik", d: "Afyonkarahisar" }, "c"),
            new Question("'Tehlikeli Oyunlar' kitabının yazarı kimdir?", { a: "Oğuz Atay", b: "Sait Faik Abasıyanık", c: "Sabahattin Ali", d: "Özdemir Asaf" }, "a"),
            new Question("2020 yılında yılın en iyi romanı ödülünü alan 'Gece Yarısı Kütüphanesi' kitabının ana karakteri kimdir", { a: "Erwin Smith", b: "Nora Seed", c: "Gregor Samsa", d: "Veronika" }, "b"),
            new Question("Optimus Prime, Megatron ve Bumblebee hangi film serisinde yer alan karakterlerdir?", { a: "Star Wars", b: "Arka Sokaklar", c: "Transformers", d: "Robot Wars" }, "c"),
            new Question("'Cevapsız Sorular' şarkısı hangi gruba aittir?", { a: "Manga", b: "Model", c: "Adamlar", d: "Dolu Kadehi Ters Tut" }, "a"),
            new Question("'Yanmış İçinden' şarkısı hangi gruba aittir?", { a: "Manga", b: "Model", c: "Adamlar", d: "Dolu Kadehi Ters Tut" }, "c"),
            new Question("'Mey' şarkısı hangi gruba aittir?", { a: "Manga", b: "Model", c: "Adamlar", d: "Dolu Kadehi Ters Tut" }, "b"),
            new Question("Edebiyat kitaplarında, Cemal Süreya, Edip Cansever ve Turgut Uyar hangi edebi akımın içerisinde kabul edilir?", { a: "İkinci Yeni", b: "Mavi", c: "Beş Hececiler", d: "Yedi Meşale" }, "a"),
        ]
    },
    {
        "Category": "Software",
        "List": [
            new Question("C# dili hangi firma tarafından geliştirilen bir programlama dilidir", { a: "Oracle", b: "Apple", c: "Microsoft", d: "Meta" }, "c"),
            new Question("Seçeneklerden hangisi bir yazılım dili değildir?", { a: "JavaScript", b: "HTML", c: "C#", d: "Java" }, "b"),
            new Question("Hangisi JavaScript paket yönetim uygulamasıdır?", { a: "Node.js", b: "Npm", c: "TypeScript", d: "Nuget" }, "b"),
            new Question("Hangisi Frontend kapsamında değerlendirilemez?", { a: "CSS", b: "HTML", c: "SQL", d: "JavaScript" }, "c"),
            new Question("Hangisi Backend kapsamında değerlendirilir?", { a: "Node.js", b: "TypeScript", c: "Angular", d: "React" }, "a"),
            new Question("Hangisi javascript programlama dilini kullanmaz?", { a: "React", b: "Angular", c: "Vuejs", d: "Asp.net" }, "d"),
            new Question(" 2 GB kaç MB eder?", { a: "256", b: "512", c: "1024", d: "2048" }, "d")
        ]
    },
    {
        "Category": "Anime(General)",
        "List": [
            new Question("Hangi anime 'Big Three' içerisinde bulunmaz?", { a: "Naruto", b: "Bleach", c: "One Piece", d: "Dragon Ball" }, "d"),
            new Question("Naruto animesinin ana karakteri kimdir?", { a: "Jamal", b: "Naruto(Kesinlikle değil)", c: "Sasuke", d: "Sakura" }, "b"),
            new Question("'Big Three' İçerisinde en çok bölüme sahip anime hangisidir?", { a: "One Piece", b: "Naruto", c: "Bleach", d: "Dragon Ball" }, "a"),
            new Question("'Soul Society' hangi animede bulunan bir yerleşkedir?", { a: "Attack on Titan", b: "Demon Slayer", c: "Soul Eater", d: "Bleach" }, "d"),
            new Question("'Hunter x Hunter' animesinde nen güçlerini hangi karakter çalabilmektedir?", { a: "Chrollo Lucifer", b: "Killua Zoldyck", c: "Neferpitou", d: "Hisoka" }, "a"),
            new Question("'Naruto Shippuden' animesinde 'Ghost of the Uchiha' lakabı kime verilmiştir", { a: "Uchiha İtachi", b: "Uchiha Sasuke", c: "Uchiha Madara", d: "Uchiha İzuna" }, "c"),
            new Question("Anime hangi ülkenin kültürel bir parçasıdır?", { a: "Japonya", b: "Kore", c: "Çin", d: "Türkiye" }, "a"),
            new Question("'Death Kid' hangi animenin ana karakterlerinden birisidir?", { a: "Sword Art Online", b: "Ansatsu Kyoushitsu", c: "Soul Eater", d: "Baki Hanma" }, "c"),
            new Question("'Aincrad' hangi animenin içerisinde bulunan bir yerleşkedir?", { a: "Sword Art Online", b: "Ansatsu Kyoushitsu", c: "Soul Eater", d: "Baki Hanma" }, "a"),
            new Question("'Konoha' hangi animenin içerisinde bulunan bir yerleşkedir?", { a: "One Piece", b: "Ansatsu Kyoushitsu", c: "Soul Eater", d: "Naruto" }, "d"),
            new Question("'Nen' kavramı hangi animede geçmektedir?", { a: "Hunter x Hunter", b: "Code Geass", c: "Soul Eater", d: "Baki Hanma" }, "a"),
            new Question("Seçeneklerden hangisi 'Nanatsu no Taizai' animesindeki ana karakterlerden biridir?", { a: "İchigo", b: "Kirito", c: "Killua", d: "Meliodas" }, "d"),
            new Question("Elric kardeşler hangi animenin ana karakterleridirler", { a: "Naruto", b: "Fairy Tail", c: "Full Metal Alchemist", d: "Hai to Gensou no Grimgar" }, "c"),
            new Question("'Attack on Titan' evreninde keşif birliğinin en çok başarılı keşif sayısına sahip olan, 13.komutanı kimdir?", { a: "Erwin Smith", b: "Levi Ackerman", c: "Keith Shadis", d: "Hange Zoe" }, "a"),
            new Question("'Attack on Titan' evreninde seçeneklerden hangisi paradis adasındaki duvarların isimlerinden biri değildir", { a: "Wall Rose", b: "Wall Maria", c: "Wall Ymir", d: "Wall Sina" }, "c"),
            new Question("'Kaneki Ken' hangi animenin ana karakteridir", { a: "Sword Art Onlide", b: "Toradora", c: "Sousei no Onmyoji", d: "Tokyo Ghoul" }, "d"),

        ]
    },
    {
        "Category": "Star-Wars",
        "List": [
            new Question("Darth Vader'ın gerçek kimliği kimdir?", { a: "Obi-Wan Kenobi", b: "Rey Skywalker", c: "Luke Skywalker", d: "Anakin Skywalker" }, "d"),
            new Question("Anakin Skywalker'ın Padawanını ismi nedir?", { a: "Cal Kestis", b: "Rey Skywalker", c: "Barriss Offee", d: "Ahsoka Tano" }, "d"),
            new Question("Millenium Falcon'un asıl sahibi kimdir", { a: "Lando Calrissian", b: "Han Solo", c: "Orson Krennic", d: "Jabba the Hutt" }, "a"),
            new Question("BD-1 kimin droididir", { a: "Eno Cordova", b: "Yoda", c: "Leia Organa", d: "R2-D2" }, "a"),
            new Question("Mandalorian dizisinin ana karakteri kimdir", { a: "Bo-Katan Kryze", b: "Sabine Wren", c: "Boba Fett", d: "Din Djarin" }, "d"),
            new Question("Inquisitor ekibinin 'Shadow' adı altında aradıkları kişi kimdir", { a: "Darth Nihilus", b: "Ahsoka Tano", c: "Ezra Bridger", d: "Darth Maul" }, "d"),
            new Question("Bir gezegeni yok edecek güce sahip darth hangisidir?", { a: "Darth Nihilus", b: "Darth Vader", c: "Darth Revan", d: "Darth Malgus" }, "a"),
            new Question("Anakin Skywalker'ın doğduğu gezegen hangisidir", { a: "Coruscant", b: "Bracca", c: "Tatooine", d: "Felucia" }, "c"),
        ]
    }
]
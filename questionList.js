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
            new Question("Hangisi bir yazar değildir?", { a: "Franz Kafka", b: "Fyodor Dostoyevski", c: "Ernest Hemingway", d: "Mona Lisa" }, "d"),
            new Question("Hangisi bir şarkıcı değildir?", { a: "Madonna", b: "Lady Gaga", c: "Maria Callas", d: "Picasso" }, "d"),
            new Question("Hangisi bir gezegen değildir?", { a: "Jüpiter", b: "Satürn", c: "Plüton", d: "Mars" }, "c"),
            new Question("İlk Türk kadın astronot kimdir?", { a: "Ayşe Yılmaz", b: "Tansu Çiller", c: "Arzu Çetin", d: "Cemre Çıtak" }, "d"),
            new Question("Hangisi bir alaşım değildir?", { a: "Bronz", b: "Altın", c: "Gümüş", d: "Pirinç" }, "b"),
            new Question("En uzun nehir hangisidir?", { a: "Nil Nehri", b: "Amazon Nehri", c: "Yangtze Nehri", d: "Mississippi Nehri" }, "b"),
            new Question("Hangi yıl Türkiye Cumhuriyeti kurulmuştur?", { a: "1920", b: "1922", c: "1923", d: "1925" }, "c"),
            new Question("Türkiye'nin en yüksek dağı hangisidir?", { a: "Ağrı Dağı", b: "Erciyes Dağı", c: "Uludağ", d: "Nemrut Dağı" }, "a"),
            new Question("Türkiye'nin doğusunda yer alan ve Türkiye'nin en büyük gölü olan göl hangisidir?", { a: "Beyşehir Gölü", b: "Van Gölü", c: "Eğirdir Gölü", d: "Uluabat Gölü" }, "b"),
            new Question("Türkiye'nin en uzun nehri hangisidir?", { a: "Kızılırmak", b: "Fırat", c: "Sakarya", d: "Kara Su" }, "a"),
            new Question("Türkiye'nin güneybatısında yer alan ve turizm cenneti olarak nitelendirilen ilimiz hangisidir?", { a: "Antalya", b: "İzmir", c: "Muğla", d: "Mersin" }, "c"),
            new Question("Türkiye'nin 81 ilinden birisi olan en küçük il hangisidir?", { a: "Bartın", b: "Yalova", c: "Kırklareli", d: "Düzce" }, "b"),
            new Question("Türkiye'nin en kalabalık şehri hangisidir?", { a: "İstanbul", b: "Ankara", c: "İzmir", d: "Bursa" }, "a"),
            new Question("Türkiye'nin en uzun kara sınırı hangi ülkeyle paylaşılmaktadır?", { a: "Yunanistan", b: "Bulgaristan", c: "Suriye", d: "İran" }, "d"),
            new Question("Türkiye'nin ilk kadın pilotu kimdir?", { a: "Sabiha Gökçen", b: "Hürmüz Gökalp", c: "Ayşe Çavdar", d: "Zehra Aylin" }, "a"),
            new Question("Türkiye'nin ikinci büyük kenti hangisidir?", { a: "Ankara", b: "İzmir", c: "Bursa", d: "Antalya" }, "a"),
            new Question("Türkiye'nin en büyük adası hangisidir?", { a: "Gökçeada", b: "Bozcaada", c: "Marmara Adası", d: "Büyükada" }, "c"),
            new Question("Türkiye'nin ilk yerli otomobili hangisidir?", { a: "Devrim", b: "Anadol", c: "Tofaş", d: "Renault" }, "a"),
            new Question("Türkiye'nin en yüksek bacası nerededir?", { a: "Yozgat", b: "Konya", c: "Muğla", d: "Çorum" }, "c"),
            new Question("Türkiye'deki en eski üniversite hangisidir?", { a: "İstanbul Üniversitesi", b: "Ankara Üniversitesi", c: "Ege Üniversitesi", d: "Boğaziçi Üniversitesi" }, "a"),
            new Question("Türkiye'deki en büyük göl hangisidir?", { a: "Beyşehir Gölü", b: "Van Gölü", c: "Eğirdir Gölü", d: "Uluabat Gölü" }, "b"),
            new Question("Türkiye'deki en yüksek ilçe hangisidir?", { a: "Sarıkamış", b: "Seydişehir", c: "Refahiye", d: "Köprülü" }, "a"),
            new Question("Türkiye'deki en yüksek şelale hangisidir?", { a: "Yerköprü Şelalesi", b: "Karakaya Şelalesi", c: "Manavgat Şelalesi", d: "Kursunlu Şelalesi" }, "b"),
            new Question("Türkiye'de kaç tane bölge bulunmaktadır?", { a: "6", b: "7", c: "8", d: "9" }, "b"),
            new Question("Türkiye'nin ilk cumhurbaşkanı kimdir?", { a: "Mustafa Kemal Atatürk", b: "İsmet İnönü", c: "Celal Bayar", d: "Adnan Menderes" }, "a"),



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
            new Question(" 2 GB kaç MB eder?", { a: "256", b: "512", c: "1024", d: "2048" }, "d"),
            new Question("Bir bilgisayarın işlem gücü birimine ne ad verilir?", { a: "CPU", b: "GPU", c: "RAM", d: "ROM" }, "a"),
            new Question("Hangi işletim sistemi mobil cihazlarda en yaygın olarak kullanılır?", { a: "iOS", b: "Android", c: "Windows", d: "macOS" }, "b"),
            new Question("Hangi internet tarayıcısı popülerliğini yitirmeye başlamıştır?", { a: "Chrome", b: "Firefox", c: "Safari", d: "Internet Explorer" }, "d"),
            new Question("Hangi veri yapısı en son eklenen veriye ilk erişir?", { a: "Queue", b: "Stack", c: "Heap", d: "Tree" }, "b"),
            new Question("Bir yazılımın hatalarının giderilmesi işlemine ne ad verilir?", { a: "Analiz", b: "Debugging", c: "Optimizasyon", d: "Kodlama" }, "b"),
            new Question("Bir yazılım geliştirme sürecinde, yazılımın farklı bölümlerini birleştirerek test etmeye ne ad verilir?", { a: "Unit test", b: "Integration test", c: "System test", d: "Beta test" }, "b"),
            new Question("Bir yazılımın kullanıcı arayüzünde, kullanıcıya hatalı giriş yaptığında gösterilen uyarılara ne ad verilir?", { a: "Prompt", b: "Warning", c: "Error message", d: "Confirmation" }, "c"),
            new Question("Bir yazılım aracının, kullanıcının işlemi geri almasına olanak tanıyan özelliğine ne ad verilir?", { a: "Redo", b: "Undo", c: "Refresh", d: "Back" }, "b"),
            new Question("Bir bilgisayar fare aracının, üstünde durduğunda bir açıklama metni görüntüleyen özelliğine ne ad verilir?", { a: "Tooltip", b: "Hover", c: "Gif", d: "Icon" }, "a"),
            new Question("Bir yazılım aracının, kullanıcının çıkmadan önce verileri kaydetmek isteyip istemediğini sorma özelliğine ne ad verilir?", { a: "Exit", b: "Logout", c: "Quit", d: "Save Reminder" }, "d"),
            new Question("Bir yazılım aracının, kullanıcının bir pencerede bulunan bilgileri başka bir pencereye taşımasını sağlayan özelliğine ne ad verilir?", { a: "Drag and drop", b: "Copy and paste", c: "Cut and paste", d: "Move and copy" }, "a"),
            new Question("Bir yazılım aracının, kullanıcının verileri otomatik olarak kaydeden özelliğine ne ad verilir?", { a: "Save Reminder", b: "Backup", c: "Save As", d: "Autosave" }, "d"),
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
            new Question("'Kaneki Ken' hangi animenin ana karakteridir", { a: "Sword Art Online", b: "Toradora", c: "Sousei no Onmyoji", d: "Tokyo Ghoul" }, "d"),
            new Question("Hangi anime serisindeki ana karakter 'Monkey D. Luffy‘dır?", { a: "One Piece", b: "Bleach", c: "Naruto", d: "Fairy Tail" }, "a"),
            new Question("Hangi anime serisindeki ana karakter 'Saitama‘dır?", { a: "One Punch Man", b: "My Hero Academia", c: "Dragon Ball Z", d: "Yu Yu Hakusho" }, "a"),
            new Question("Hangi anime serisi, bir lise klasiğinde geçer ve baş karakteri 'Hachiman Hikigaya‘dır?", { a: "Oregairu", b: "K-On!", c: "Toradora!", d: "The Melancholy of Haruhi Suzumiya" }, "a"),
            new Question("Hangi anime serisindeki ana karakter 'Gon Freecss‘dir?", { a: "Hunter x Hunter", b: "Fate/Zero", c: "Sword Art Online", d: "Darling in the FranXX" }, "a"),
            new Question("Hangi anime serisindeki ana karakter 'Eren Yeager‘dır?", { a: "Attack on Titan", b: "One Piece", c: "Bleach", d: "Naruto" }, "a"),
            new Question("Hangi anime serisindeki ana karakter 'Light Yagami‘dir?", { a: "Death Note", b: "Fullmetal Alchemist", c: "Bleach", d: "Jojo's Bizarre Adventure" }, "a"),
            new Question("Hangi anime serisindeki ana karakter 'Natsu Dragneel‘dır?", { a: "Fairy Tail", b: "Hunter x Hunter", c: "Sword Art Online", d: "Darling in the FranXX" }, "a"),
            new Question("Hangi anime serisindeki ana karakter 'Jotaro Kujo‘dır?", { a: "Jojo's Bizarre Adventure", b: "Fullmetal Alchemist", c: "Death Note", d: "Bleach" }, "a"),
            new Question("Kimi no Na Wa adlı animede, Mitsuha Miyamizu hangi şehirde yaşar?", { a: "Tokyo", b: "Kyoto", c: "Osaka", d: "Itomori" }, "d"),
            new Question("Shigatsu wa Kimi no Uso adlı animede, Kosei Arima hangi müzik aletini çalar?", { a: "Keman", b: "Piyano", c: "Gitar", d: "Keman çellosu" }, "b"),
            new Question("Yakusoku no Neverland adlı animede, Grace Field House hangi tür yatılı okuldur?", { a: "Askeri okul", b: "Sihirli okul", c: "Müzik okulu", d: "Yetimhane" }, "d"),
            new Question("Boku dake ga Inai Machi adlı animede, Satoru Fujinuma hangi güce sahiptir?", { a: "Zaman yolculuğu", b: "Telekinezi", c: "Hafıza manipülasyonu", d: "Elektrik kontrolü" }, "a"),
            new Question("Koe no Katachi adlı animede, Shouya Ishida hangi engellere sahiptir?", { a: "Sağırlık", b: "Körlük", c: "Konuşamama", d: "Felç" }, "a"),
            new Question("Kimi ni Todoke adlı animede, Sawako Kuronuma hangi takma adla anılır?", { a: "Sadako", b: "Kayako", c: "Yamada", d: "Sasaki" }, "a"),
            new Question("Toradora! adlı animede, Taiga Aisaka hangi takma adla anılır?", { a: "Kaplan", b: "Köpekbalığı", c: "Kuş", d: "Kedi" }, "a"),
            new Question("Kaichou wa Maid-sama! adlı animede, Misaki Ayuzawa hangi okulda okumaktadır?", { a: "Seika Lisesi", b: "Miyabigaoka Lisesi", c: "Ousai Akademisi", d: "Hakusenkan Lisesi" }, "a"),
            new Question("Soul Eater adlı animede, Death the Kid'in silahları hangi şeylerdir?", { a: "Pistol", b: "Kılıç", c: "Kama", d: "Yay" }, "a"),
            new Question("Nanatsu no Taizai adlı animede, Meliodas hangi günaha sahiptir?", { a: "Wrath", b: "Lust", c: "Greed", d: "Pride" }, "a"),
            new Question("Black Clover adlı animede, Asta'nın gücü nedir?", { a: "Elemental Magic", b: "Spatial Magic", c: "Time Magic", d: "Anti Magic" }, "d"),
            new Question("Tokyo Ghoul adlı animede, Ken Kaneki hangi organizasyonun bir parçasıdır?", { a: "Anteiku", b: "Aogiri Tree", c: "CCG", d: "Ghoul Investigators" }, "a"),
            new Question("Gintama adlı animede, Gintoki Sakata'nın mesleği nedir?", { a: "Samurai", b: "Doktor", c: "Öğretmen", d: "Özel Dedektif" }, "a"),
            new Question("Demon Slayer adlı animede, Tanjirou Kamado'nun kardeşinin adı nedir?", { a: "Kanao Tsuyuri", b: "Giyuu Tomioka", c: "Inosuke Hashibira", d: "Nezuko Kamado" }, "d"),
            new Question("My Hero Academia adlı animede, Deku'nun güçleri kimden geçmiştir?", { a: "All Might", b: "Endeavor", c: "Hawks", d: "Best Jeanist" }, "a"),
            new Question("Hunter x Hunter adlı animede, Gon Freecss'in babası kimdir?", { a: "Hisoka", b: "Ging Freecss", c: "Kurapika", d: "Leorio Paradinight" }, "b"),
            new Question("Sword Art Online adlı animede, Kirito'nun gerçek adı nedir?", { a: "Kazuto Kirigaya", b: "Kazuto Asuna", c: "Kazuto Suguha", d: "Kazuto Sinon" }, "a"),
            new Question("Fairy Tail adlı animede, Natsu Dragneel hangi tür büyü yapar?", { a: "Ateş Büyüsü", b: "Su Büyüsü", c: "Toprak Büyüsü", d: "Hava Büyüsü" }, "a"),
            new Question("Naruto adlı animede, Naruto Uzumaki'nin en yakın arkadaşı kimdir?", { a: "Kakashi Hatake", b: "Sasuke Uchiha", c: "Jiraiya", d: "Shikamaru Nara" }, "b"),











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
            new Question("Leia Organa'nın hangi gezegende doğduğu bilinmektedir?", { a: "Tatooine", b: "Alderaan", c: "Coruscant", d: "Naboo" }, "b"),
            new Question("İmparatorluk güçleri tarafından kullanılan savaş istasyonunun adı nedir?", { a: "Death Star", b: "Star Destroyer", c: "TIE Fighter", d: "AT-AT" }, "a"),
            new Question("İmparatorluk güçleri tarafından üretilen ve ayakta yürüyebilen zırhlı araçların adı nedir?", { a: "AT-AT", b: "AT-ST", c: "X-Wing", d: "TIE Fighter" }, "a"),
            new Question("Chewbacca'nın hangi tür bir yaratık olduğu bilinmektedir?", { a: "Wookiee", b: "Ewok", c: "Jawa", d: "Tusken Raider" }, "a"),
            new Question("Luke Skywalker'ın amcasının adı nedir?", { a: "Owen", b: "Beru", c: "Anakin", d: "Shmi" }, "a"),
            new Question("'Hello there!' cümlesiyle efsaneleşmiş karakterin adı nedir?", { a: "General Grievous", b: "Darth Maul", c: "Anakin Skywalker", d: "Obi-Wan Kenobi" }, "d"),
            new Question("Obi-Wan Kenobi'nin öğrencisi olan ve sonrasında karanlık tarafa geçen karakter kimdir?", { a: "Anakin Skywalker", b: "Darth Maul", c: "Count Dooku", d: "Kylo Ren" }, "a"),
            new Question("İsyan birliği tarafından kullanılan savaş gemisi türü hangisidir ?", { a: "TIE Fighter", b: "AT-AT", c: "AT-ST", d: "X-Wing" }, "d"),
            new Question("Obi-Wan Kenobi'nin öldürdüğü Sith Lord kimdir?", { a: "Darth Tyranus", b: "Darth Maul", c: "Darth Sidious", d: "Darth Vader" }, "b"),
            new Question("Luke Skywalker'ın kızkardeşi kimdir?", { a: "Leia Organa", b: "Rey", c: "Jaina Solo", d: "Mara Jade" }, "a"),
            new Question("Lando Calrissian'ın hangi gezegende doğduğu bilinmektedir?", { a: "Coruscant", b: "Tatooine", c: "Bespin", d: "Naboo" }, "c"),
            new Question("Hangi karakter 'You underestimate my power!' repliğini söyler?", { a: "Obi-Wan Kenobi", b: "Darth Vader", c: "Anakin Skywalker", d: "Yoda" }, "c"),
            new Question("Hangi karakter 'I am no Jedi' repliğini söyler?", { a: "Ahsoka Tano", b: "Asajj Ventress", c: "Darth Maul", d: "Darth Vader" }, "a"),
            new Question("Hangi karakter 'I want to learn the ways of the Force and become a Jedi like my father.' repliğini söyler?", { a: "Anakin Skywalker", b: "Luke Skywalker", c: "Ben Solo", d: "Rey" }, "b"),
            new Question("İmparatorluk lideri olan kişi kimdir?", { a: "Darth Vader", b: "Obi-Wan Kenobi", c: "Yoda", d: "Palpatine" }, "d"),
            new Question("Hangi filmde, Darth Vader'ın 'Nooooo!' diye bağırdığı sahne yer alır?", { a: "The Phantom Menace", b: "Attack of the Clones", c: "Revenge of the Sith", d: "Return of the Jedi" }, "c"),
            new Question("Hangi filmde, Obi-Wan Kenobi karakteri öldürülmüştür?", { a: "A New Hope", b: "The Empire Strikes Back", c: "Return of the Jedi", d: "Revenge of the Sith" }, "a"),
            new Question("Hangi filmde, Luke Skywalker'ın Jedi yolculuğu başlamıştır?", { a: "A New Hope", b: "The Empire Strikes Back", c: "Return of the Jedi", d: "The Force Awakens" }, "a"),
            new Question("Hangi karakter, 'I am your father' repliğini söyler?", { a: "Darth Maul", b: "Darth Sidious", c: "Darth Vader", d: "Kylo Ren" }, "c"),
            new Question("Hangi filmde, Luke Skywalker'ın babası Darth Vader olduğu açığa çıkar?", { a: "The Phantom Menace", b: "Attack of the Clones", c: "Revenge of the Sith", d: "The Empire Strikes Back" }, "d"),
            new Question("Hangi karakter, 'Do or do not. There is no try' repliğini söyler?", { a: "Darth Vader", b: "Obi-Wan Kenobi", c: "Luke Skywalker", d: "Yoda" }, "d"),
            new Question("Hangi filmde, Leia Organa'nın gezegeni olan Alderaan yok edilmiştir?", { a: "A New Hope", b: "The Empire Strikes Back", c: "Return of the Jedi", d: "Rogue One" }, "a"),
            new Question("Hangi filmde, Darth Vader'ın gerçek kimliği açığa çıkarılmıştır?", { a: "The Phantom Menace", b: "Attack of the Clones", c: "Revenge of the Sith", d: "Return of the Jedi" }, "d"),
        ]
    }, {
        "Category": "Game",
        "List": [
            new Question("Hangi oyunun kahramanı Mario'dur?", { a: "Sonic the Hedgehog", b: "Super Mario Bros", c: "The Legend of Zelda", d: "Mega Man" }, "b"),
            new Question("Hangi oyun The Elder Scrolls serisine aittir?", { a: "Skyrim", b: "Fallout", c: "Grand Theft Auto", d: "Assassin's Creed" }, "a"),
            new Question("Hangi oyun serisi, 'Kahramanımız, Nathan Drake, kayıp hazineleri ararken düşmanlarıyla mücadele ediyor?'", { a: "Uncharted", b: "Tomb Raider", c: "God of War", d: "Prince of Persia" }, "a"),
            new Question("Hangi oyun serisi, 'Ana karakterimiz, bir suikastçidir ve tarihi olaylara karışır?'", { a: "Batman: Arkham serisi", b: "Hitman serisi", c: "Metal Gear Solid serisi", d: "Deus Ex serisi" }, "b"),
            new Question("Hangi oyun serisi, 'Kahramanımız bir Spartan savaşçısıdır ve Yunan tanrılarıyla mücadele eder?'", { a: "Assassin's Creed serisi", b: "Prince of Persia serisi", c: "God of War serisi", d: "Tomb Raider serisi" }, "c"),
            new Question("Hangi oyun serisi, 'Ana karakterimiz, bir yazılım geliştiricisi olarak çalışır ve bilinmez bir hacker tarafından avlanır?'", { a: "Watch Dogs serisi", b: "Deus Ex serisi", c: "Assassin's Creed serisi", d: "Cyberpunk 2077" }, "a"),
            new Question("Hangi oyun, bir kahramanın zamanı geri alabilmesine izin veren bir müzik temalı platform oyunudur?", { a: "Castlevania", b: "Mega Man", c: "Braid", d: "Celeste" }, "c"),
            new Question("Hangi oyun, bir parkur oyunudur ve oyuncuların parkurda serbestçe hareket etmelerine izin verir?", { a: "Mirror's Edge", b: "Dying Light", c: "Assassin's Creed", d: "Prince of Persia" }, "a"),
            new Question("Hangi oyun, bir kahramanın hayatta kalmak için zorlu bir zombi kıyametiyle mücadele ettiği açık dünya bir oyunudur?", { a: "Dying Light", b: "State of Decay", c: "Dead Rising", d: "Resident Evil" }, "a"),
            new Question("Hangi oyun serisi, 'Kahramanımız, klon bir askerdir ve bir imparatorluğun çöküşüne tanıklık eder?'", { a: "Halo serisi", b: "Mass Effect serisi", c: "Gears of War serisi", d: "Star Wars: Knights of the Old Republic serisi" }, "b"),            
            new Question("Hangi oyun serisi, 'Kahramanımız, bir korsandır ve Karayip Denizi'nde maceralar yaşar?'", { a: "Uncharted serisi", b: "Assassin's Creed serisi", c: "Tomb Raider serisi", d: "Pirates of the Caribbean" }, "b"),
            new Question("Hangi oyun serisi, 'Kahramanımız, bir hazine avcısıdır ve antik mezarları araştırır?'", { a: "Indiana Jones serisi", b: "Nathan Drake serisi", c: "Tomb Raider serisi", d: "Prince of Persia serisi" }, "c"),
            new Question("Hangi oyun, bir kahramanın zombi istilasından kaçmak için bir otelde hayatta kalma mücadelesini konu alır?", { a: "Dead Rising", b: "State of Decay", c: "Dying Light", d: "Left 4 Dead" }, "c"),
            new Question("Hangi oyun, bir kahramanın bir yabancı dünyada hayatta kalma mücadelesini konu alır ve oyunculara sonsuz bir evren sunar?", { a: "No Man's Sky", b: "Outer Wilds", c: "Subnautica", d: "Astroneer" }, "a"),
            new Question("Hangi oyun türünde oyuncu, kendi karakterlerini yaratır ve dünyayı keşfeder?", { a: "Aksiyon", b: "Macera", c: "Rol yapma", d: "Strateji" }, "c"),
            new Question("Hangi oyunun adı, bir çift kartın eşleştirilerek bulunması gerektiğini belirtir?", { a: "Mahjong", b: "Poker", c: "Batak", d: "Hafıza" }, "d"),
            new Question("Hangi oyun, oyuncuların birbirlerine karşı savaştığı bir nişancı oyunudur?", { a: "Counter-Strike", b: "Minecraft", c: "Terraria", d: "The Sims" }, "a"),
            new Question("Hangi oyun, oyuncuların bir futbol maçını yönettiği bir simülasyon oyunudur?", { a: "FIFA", b: "NBA", c: "Madden NFL", d: "NHL" }, "a"),
            new Question("Hangisi, League of Legends oyunundaki bir şampiyon karakterinin adı değildir?", { a: "Ashe", b: "Jinx", c: "Zed", d: "Invoker" }, "d"),
            new Question("Hangisi, Minecraft oyunundaki canavar türlerinden biridir?", { a: "Zombi", b: "Vampir", c: "Kurtadam", d: "Balrog" }, "a"),
            new Question("Hangisi, World of Warcraft oyununda oynanabilen bir ırktır?", { a: "Naga", b: "Zerg", c: "Tauren", d: "Protoss" }, "c"),
            new Question("Hangisi, Dota 2 oyununda oynanabilen bir karakter değildir?", { a: "Invoker", b: "Grimstroke", c: "Spectre", d: "Doomfist" }, "d"),
            new Question("Hangisi, Counter-Strike: Global Offensive oyunundaki bir harita adıdır?", { a: "Dust II", b: "Frostbite", c: "Sandstorm", d: "Tidal Wave" }, "a"),
            new Question("Hangisi, The Elder Scrolls V: Skyrim oyunundaki bir ırktır?", { a: "Orc", b: "Goblin", c: "Troll", d: "Giant" }, "a"),
            new Question("Hangisi, Grand Theft Auto V oyunundaki ana karakterlerden biridir?", { a: "Franklin Clinton", b: "Max Payne", c: "Lamar Davis", d: "Tommy Vercetti" }, "a"),
            new Question("Hangisi, Civilization VI oyununda oynanabilen bir medeniyet değildir?", { a: "Aztekler", b: "Persler", c: "Romalılar", d: "Babiller" }, "b")

        ]
    }
]
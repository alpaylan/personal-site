const data = [
  {
    id: 'devy',
    title: "Introducing Devy, written using Devy!",
    link: '/blog/devy',
    date: '2024-04-11',
    desc: "his blog post introduces Devy, the interactive blog engine I’ve been working on. Devy is a static site generator that allows you to write interactive blog p",
    lang: 'en',
    tags: ['devy', 'static site generator'],
    type: 'project'
  },
  {
    id: 'fp-roadmap',
    title: 'An Introductory Roadmap Into The Functional Programming Concepts',
    link: '/blog/fp-roadmap',
    date: '2023-06-28',
    desc: 'Below are the topics I believe could be relevant to someone who would like to learn functional programming.',
    lang: 'en',
    tags: ['functional programming'],
    type: 'roadmap'
  },
  {
    id: 'introduction-to-property-based-testing',
    title: 'Introduction to Property Based Testing',
    link: '/blog/introduction-to-property-based-testing',
    date: '2023-03-14',
    desc: 'Property Based Random Testing is a flavor of testing that aims to use higher level specifications for testing instead of hand-writing or generating tests. It was first developed by Koen Claessen and John Hughes in 1999 as a software library for Haskell, called QuickCheck. There has been substantial development in the field since then, I will not bore you with lots of details as the purpose of this writing is to familiarize you with PBT(Property Based Testing).',
    lang: 'en',
    tags: ['testing'],
    type: 'tutorial'
  },
   {
    "title": "Designing A Cryptic Language Puzzle",
    "id": "designing-a-cryptic-language-puzzle",
    "link": "/blog/designing-a-cryptic-language-puzzle",
    "desc": "Last week, I published a Cryptic Language called Kelesce on my website, with a given text as the puzzle, and some set of clues I added to…",
    "date": "2024-03-23",
    "lang": "en",
    "tags": ["puzzle"],
    "type": "project"
  },
  {
    "title": "Solving Algorithmic Problems in The Wild",
    "id": "solving-algorithmic-problems-in-the-wild",
    "link": "/blog/solving-algorithmic-problems-in-the-wild",
    "desc": "For most software engineers, algorithmic problems are this bizarre type of problems that they only have to know in order to succeed in…",
    "date": "2024-03-06",
    "lang": "en",
    "tags": ["algorithms"],
    "type": "tutorial"
  },
  {
    "title": "Afet Anında Doğru Bilgiye Ulaşım",
    "id": "afet-an%C4%B1nda-do%C4%9Fru-bilgiye-ula%C5%9F%C4%B1m",
    "link": "/blog/afet-an%C4%B1nda-do%C4%9Fru-bilgiye-ula%C5%9F%C4%B1m",
    "desc": "Bu yazının yayınlandığı tarih itibariyle 6 Şubat depreminin üzerinden 358 gün geçti. Bu yazıda, yaşadığımız depremi, kaybettiklerimizi…",
    "date": "2024-01-28",
    "lang": "tr",
    "tags": ["afet"],
    "type": "discussion"
  },
  {
    "title": "The Lies About Abstraction",
    "id": "the-lies-about-abstraction",
    "link": "/blog/the-lies-about-abstraction",
    "desc": "Below is an excerpt from Street Coder, where Sedat Kapanoglu talks about benefits of layering in software.",
    "date": "2023-12-02",
    "lang": "en",
    "tags": ["software engineering"],
    "type": "discussion"
  },
  {
    "title": "Software Demystified: How does a Text Box Work?",
    "id": "software-demystified%3A-how-does-a-text-box-work%3F",
    "link": "/blog/software-demystified%3A-how-does-a-text-box-work%3F",
    "desc": "Below is an excerpt from Street Coder, where Sedat Kapanoglu talks about opacity in software.",
    "date": "2023-11-24",
    "lang": "en",
    "tags": ["software engineering", "algorithms"],
    "type": "tutorial"
  },
  {
    "title": "Yazılım Projeleri: Kapsamlı Rehber",
    "id": "yaz%C4%B1l%C4%B1m-projeleri%3A-kapsaml%C4%B1-rehber",
    "link": "/blog/yaz%C4%B1l%C4%B1m-projeleri%3A-kapsaml%C4%B1-rehber",
    "desc": "Yazıya başlamadan önce, bu yazının kimlere yönelik olduğunu belirteyim.",
    "date": "2023-11-15",
    "lang": "tr",
    "tags": ["software engineering"],
    "type": "tutorial"
  },
  {
    "title": "Algoritmik Problemler: Kapsamlı Rehber",
    "id": "algoritmik-problemler%3A-kapsaml%C4%B1-rehber",
    "link": "/blog/algoritmik-problemler%3A-kapsaml%C4%B1-rehber",
    "desc": "Bu yazıda, çoğunlukla Leetcode tarzı olarak bahsedilen, aynı zamanda “Competitive Programming”, “Algoritma Sorusu”, “Lanet Olası…",
    "date": "2023-11-01",
    "lang": "tr",
    "tags": ["algorithms"],
    "type": "tutorial"
  },
  {
    "title": "Hurdles of Designing A Layout Model",
    "id": "hurdles-of-designing-a-layout-model",
    "link": "/blog/hurdles-of-designing-a-layout-model",
    "desc": "For the past 2 weeks, I have been working on designing my own layout model for the document generator I’ve been working on. I have…",
    "date": "2023-08-06",
    "lang": "en",
    "tags": ["software engineering"],
    "type": "project"
  },
  {
    "title": "Learner’s Guide to Functional Programming#0: Sum Types, Booleans and Naturals in Javascript",
    "id": "learner%E2%80%99s-guide-to-functional-programming%230%3A-sum-types%2C-booleans-and-naturals-in-javascript",
    "link": "/blog/learner%E2%80%99s-guide-to-functional-programming%230%3A-sum-types%2C-booleans-and-naturals-in-javascript",
    "desc": "",
    "date": "2023-07-13",
    "lang": "en",
    "tags": ["functional programming"],
    "type": "tutorial"
  },
  {
    "title": "Learner’s Guide to Functional Programming#1: Implementing Lists in JavaScript",
    "id": "learner%E2%80%99s-guide-to-functional-programming%231%3A-implementing-lists-in-javascript",
    "link": "/blog/learner%E2%80%99s-guide-to-functional-programming%231%3A-implementing-lists-in-javascript",
    "desc": "Although this article was written first, I suggest you read the prequel I read as background. Leaving the link below.",
    "date": "2023-07-12",
    "lang": "en",
    "tags": ["functional programming"],
    "type": "tutorial"
  },
  {
    "title": "Extracting Signals: Playing The Inverse Waldo Game",
    "id": "extracting-signals%3A-playing-the-inverse-waldo-game",
    "link": "/blog/extracting-signals%3A-playing-the-inverse-waldo-game",
    "desc": "I believe most of you will recognize the game in the following image, “Where’s Waldo?”. It has many variations such as finding the cat, the…",
    "date": "2023-07-11",
    "lang": "en",
    "tags": [],
    "type": "discussion"
  },
  {
    "title": "Sinyalleri Ayrıştırmak",
    "id": "extracting-signals%3A-playing-the-inverse-waldo-game",
    "link": "/blog/sinyalleri-ayr%C4%B1%C5%9Ft%C4%B1rmak",
    "desc": "Aşağıdaki fotoğrafı görüyorsunuz değil mi? Yılların bulmacasıdır, yok Waldo’yu bul, yok tavşanı bul, yok kediyi bul, yok farklı sayıyı bul…",
    "date": "2023-07-09",
    "lang": "tr",
    "tags": [],
    "type": "discussion"
  },
  {
    "title": "The Technical Pie (Yet-Another-Tech-Debt-Analogy)",
    "id": "the-technical-pie-%28yet-another-tech-debt-analogy%29",
    "link": "/blog/the-technical-pie-%28yet-another-tech-debt-analogy%29",
    "desc": "Yesterday, I was listening to a talk by @TitusWinters on why the current metaphors for “technical debt” are insufficient and fail to…",
    "date": "2023-06-16",
    "lang": "en",
    "tags": ["software engineering"],
    "type": "discussion"
  },
  {
    "title": "Visa-Exclusion as A Form of Inequality",
    "id": "visa-exclusion-as-a-form-of-inequality",
    "link": "/blog/visa-exclusion-as-a-form-of-inequality",
    "desc": "The problems regarding visas to Turkish people are at a ridiculous level. I urge my colleagues in any type of position of power to tap into…",
    "date": "2023-06-14",
    "lang": "en",
    "tags": [],
    "type": "discussion"
  },
  {
    "title": "Learner’s Guide to Dynamic Programming#2",
    "id": "learner%E2%80%99s-guide-to-dynamic-programming%232",
    "link": "/blog/learner%E2%80%99s-guide-to-dynamic-programming%232",
    "desc": "Dynamic programming is an algorithmic problem solving paradigm focused on recognization and elimination of repetitive computation. Earlier…",
    "date": "2023-06-10",
    "lang": "en",
    "tags": ["software engineering", "algorithms"],
    "type": "tutorial"
  },
  {
    "title": "Learner’s Guide to Dynamic Programming#1",
    "id": "learner%E2%80%99s-guide-to-dynamic-programming%231",
    "link": "/blog/learner%E2%80%99s-guide-to-dynamic-programming%231",
    "desc": "Dynamic programming is an algorithmic problem solving paradigm focused on recognization and elimination of repetitive computation. For this…",
    "date": "2023-06-07",
    "lang": "en",
    "tags": ["software engineering", "algorithms"],
    "type": "tutorial"
  },
  {
    "title": "Learner’s Guide to Coq Theorem Prover#1",
    "id": "learner%E2%80%99s-guide-to-coq-theorem-prover%231",
    "link": "/blog/learner%E2%80%99s-guide-to-coq-theorem-prover%231",
    "desc": "Before I begin, I must state that I am pretty much not qualified to write about theorem proving in Coq, but that was pretty much the idea…",
    "date": "2023-04-21",
    "lang": "en",
    "tags": ["software engineering", "algorithms", "formal verification"],
    "type": "tutorial"
  },
  {
    "title": "A Short Story of Inequality",
    "id": "a-short-story-of-inequality",
    "link": "/blog/a-short-story-of-inequality",
    "desc": "The voice we hear. The light we see. The step we take. The water we drink. The car we drive. The bed we sleep. The screen we look. The pen…",
    "date": "2023-04-17",
    "lang": "en",
    "tags": [],
    "type": "discussion"
  },
  {
    "title": "2ClickMail: 2 Clicks to Change",
    "id": "2clickmail%3A-2-clicks-to-change",
    "link": "/blog/2clickmail%3A-2-clicks-to-change",
    "desc": "I have been working on a new service for easily creating and distributing email templates. It leverages mailto schemes creating a…",
    "date": "2023-04-15",
    "lang": "en",
    "tags": ["social movements"],
    "type": "project"
  },
  {
    "title": "2ClickMail: 2 Tıkta Dünyanı Güzelleştir",
    "id": "2clickmail%3A-2-t%C4%B1kta-d%C3%BCnyan%C4%B1-g%C3%BCzelle%C5%9Ftir",
    "link": "/blog/2clickmail%3A-2-t%C4%B1kta-d%C3%BCnyan%C4%B1-g%C3%BCzelle%C5%9Ftir",
    "desc": "Yaklaşık 3 yıl önce, Covid-19 salgının ilk aylarında https://alpaylan.github.io/pass-fail-metu/ üzerinden ODTÜ’de Pass/Fail notlandırma…",
    "date": "2023-04-15",
    "lang": "tr",
    "tags": ["social movements"],
    "type": "project"
  },
  {
    "title": "Some Thoughts on Academia vs Industry(with a focus on Computer Science)",
    "id": "some-thoughts-on-academia-vs-industry%28with-a-focus-on-computer-science%29",
    "link": "/blog/some-thoughts-on-academia-vs-industry%28with-a-focus-on-computer-science%29",
    "desc": "I’m a 2nd year Computer Science PhD student, I also spent some time in the industry(part-time and internships, not a full-time-employment)…",
    "date": "2023-04-03",
    "lang": "en",
    "tags": ["computer science", "software engineering"],
    "type": "discussion"
  
  },
  {
    "title": "Where did all the writers go?",
    "id": "where-did-all-the-writers-go%3F",
    "link": "/blog/where-did-all-the-writers-go%3F",
    "desc": "Abundance is the root of dullness. We find scarcity interesting, we uphold scare items and concepts, scarcity is somehow “authentic”, it is…",
    "date": "2023-03-18",
    "lang": "en",
    "tags": [],
    "type": "discussion"
  
  },
  {
    "title": "AfetBilgi’nin Hikayesi.",
    "id": "afetbilgi%E2%80%99nin-hikayesi.",
    "link": "/blog/afetbilgi%E2%80%99nin-hikayesi.",
    "desc": "afetbilgi.com 7 Şubat 2023 Türkiye saati ile sabah 10.12'de Pazarcık Depremi sürecinin 30. saatinde aşağıdaki Tweet vasıtasıyla duyurularak…",
    "date": "2023-02-18",
    "lang": "tr",
    "tags": ["earthquake"],
    "type": "project"
  
  },
  {
    "title": "Yarım Kalan Projeler#3: Fact Checker’s Tool",
    "id": "yar%C4%B1m-kalan-projeler%233%3A-fact-checker%E2%80%99s-tool",
    "link": "/blog/yar%C4%B1m-kalan-projeler%233%3A-fact-checker%E2%80%99s-tool",
    "desc": "Asıl ismiyle “Fact Checker’s Tool” ya da “FCT”, farklı kişi ve kurumlar tarafından “FactHacker”, “FactChecker”, “Fact Maker” gibi…",
    "date": "2022-12-21",
    "lang": "tr",
    "tags": ["half-finished projects", "computer science"],
    "type": "project"
  },
  {
    "title": "Yarım Kalan Projeler#2: Learning from Learners",
    "id": "yar%C4%B1m-kalan-projeler%232%3A-learning-from-learners",
    "link": "/blog/yar%C4%B1m-kalan-projeler%232%3A-learning-from-learners",
    "desc": "Learning from Learners, kısaca LFL, ortaya çıktığı dönem beni çok heyecanlandırmıştı. Doktoraya yeni başlamanın da etkisiyle çok yeni…",
    "date": "2022-12-19",
    "lang": "tr",
    "tags": ["half-finished projects", "computer science", "learning from learners"],
    "type": "project"
  },
  {
    "title": "Yarım Kalan Projeler#1: CengBook",
    "id": "yar%C4%B1m-kalan-projeler%231%3A-cengbook",
    "link": "/blog/yar%C4%B1m-kalan-projeler%231%3A-cengbook",
    "desc": "Önce giriş, bu seri ne hakkında?",
    "date": "2022-12-17",
    "lang": "tr",
    "tags": ["half-finished projects", "computer science"],
    "type": "project"
  },
  {
    "title": "A Brief Essay on Change",
    "id": "a-brief-essay-on-change",
    "link": "/blog/a-brief-essay-on-change",
    "desc": "It’s been a long time since I’ve started thinking about change. One thing I realized is even though so much of our lives change, we still…",
    "date": "2022-10-29",
    "lang": "en",
    "tags": [],
    "type": "discussion"
  },
  {
    "title": "Seçimler v2",
    "id": "se%C3%A7imler-v2",
    "link": "/blog/se%C3%A7imler-v2",
    "desc": "Yaklaşık 18 ay önce bir yazı yazmışım. Geleceğin ne kadar korkunç olduğuna, karar vermenin, verdiğimiz kararların etkisini anlamanın ne…",
    "date": "2022-10-24",
    "lang": "tr",
    "tags": [],
    "type": "discussion"
  },
  {
    "title": "Doktorada 1 Yıl Sonunda Bazı Görüşler",
    "id": "doktorada-1-y%C4%B1l-sonunda-baz%C4%B1-g%C3%B6r%C3%BC%C5%9Fler",
    "link": "/blog/doktorada-1-y%C4%B1l-sonunda-baz%C4%B1-g%C3%B6r%C3%BC%C5%9Fler",
    "desc": "Merhabalar! Son yazımdan beri birkaç ay geçti; benim için güzel birkaç aydı, umarım sizler için de öyle olmuştur. Doktoranın 11. ayını…",
    "date": "2022-07-20",
    "lang": "tr",
    "tags": ["phd"],
    "type": "personal"
  },
  {
    "title": "Doktoramın İlk 6 Ayı Nasıl Geçti? Yoğun, Yorgun Ama Mutlu.",
    "id": "doktoram%C4%B1n-i%CC%87lk-6-ay%C4%B1-nas%C4%B1l-ge%C3%A7ti%3F-yo%C4%9Fun%2C-yorgun-ama-mutlu.",
    "link": "/blog/doktoram%C4%B1n-i%CC%87lk-6-ay%C4%B1-nas%C4%B1l-ge%C3%A7ti%3F-yo%C4%9Fun%2C-yorgun-ama-mutlu.",
    "desc": "Bu yazı, aslında Amerika’ya doktoraya geliş sürecimi zaman içerisinde neredeyse anlık olarak ele aldığım bir güncenin 4. yazısı. Geriye…",
    "date": "2022-03-08",
    "lang": "tr",
    "tags": ["phd"],
    "type": "personal"
  },
  {
    "title": "Doktora Kabulleri: Kapsamlı Rehber",
    "id": "doktora-kabulleri%3A-kapsaml%C4%B1-rehber",
    "link": "/blog/doktora-kabulleri%3A-kapsaml%C4%B1-rehber",
    "desc": "Geçtiğimiz Nisan ayında “Doktora Başvuruları: Kapsamlı Rehber” adı altında başvurular esnasında ihtiyaç duyabileceklerinizi bir kenara…",
    "date": "2022-01-29",
    "lang": "tr",
    "tags": ["phd"],
    "type": "tutorial"
  },
  {
    "title": "Hatırlamak",
    "id": "hat%C4%B1rlamak",
    "link": "/blog/hat%C4%B1rlamak",
    "desc": "Bu yazıyı geçmişte birkaç kez daha yazmaya çalıştım. Her seferinde içime sinen bir başlık bulamayıp bırakıyorum. “Beyin ve İlişkilendirme”…",
    "date": "2022-01-25",
    "lang": "tr",
    "tags": [],
    "type": "discussion"
  },
  {
    "title": "Lokasyon Bazlı Ödeme Hakkında Bazı Düşünceler",
    "id": "lokasyon-bazl%C4%B1-%C3%B6deme-hakk%C4%B1nda-baz%C4%B1-d%C3%BC%C5%9F%C3%BCnceler",
    "link": "/blog/lokasyon-bazl%C4%B1-%C3%B6deme-hakk%C4%B1nda-baz%C4%B1-d%C3%BC%C5%9F%C3%BCnceler",
    "desc": "Son günlerde yazılımcı Twitter’ında maaşlarla ilgili genel bir tartışma dönüyor. Bu tarz durumlarda fikirlerimizi Twitter üzerinden yazmaya…",
    "date": "2022-01-16",
    "lang": "tr",
    "tags": ["software engineering"],
    "type": "discussion"
  },
  {
    "title": "Proje Günlükleri: CVDL(CV Description Language)#1",
    "id": "proje-g%C3%BCnl%C3%BCkleri%3A-cvdl%28cv-description-language%29%231",
    "link": "/blog/proje-g%C3%BCnl%C3%BCkleri%3A-cvdl%28cv-description-language%29%231",
    "desc": "Merhabalar, Proje Günlükleri konseptinin ilk yazısı olduğu için projenin kendisine girmeden biraz daha serinin konseptinden bahsetmek…",
    "date": "2022-01-10",
    "lang": "tr",
    "tags": [],
    "type": "project"
  },
  {
    "title": "Amerika’da İlk 3 Ayım Nasıl Geçti? Bu Sefer Oldu Gibi.",
    "id": "amerika%E2%80%99da-i%CC%87lk-3-ay%C4%B1m-nas%C4%B1l-ge%C3%A7ti%3F-bu-sefer-oldu-gibi.",
    "link": "/blog/amerika%E2%80%99da-i%CC%87lk-3-ay%C4%B1m-nas%C4%B1l-ge%C3%A7ti%3F-bu-sefer-oldu-gibi.",
    "desc": "Selamlar, geçen 2 ayın yazısını hatırlayanlar vardır belki, farkı görmek isteyenler olabilir ekleyeyim yine.",
    "date": "2021-11-21",
    "lang": "tr",
    "tags": ["phd", "us"],
    "type": "personal"
  },
  {
    "title": "Learner’s Guide to Property Based Testing#1",
    "id": "learner%E2%80%99s-guide-to-property-based-testing%231",
    "link": "/blog/learner%E2%80%99s-guide-to-property-based-testing%231",
    "desc": "Property Based Random Testing is a flavor of testing that aims to use higher level specifications for testing instead of hand-writing or…",
    "date": "2021-11-10",
    "lang": "en",
    "tags": ["software engineering", "testing", "computer science", "learning from learners"],
    "type": "tutorial"
  },
  {
    "title": "Introduction to Learning from Learners",
    "id": "introduction-to-learning-from-learners",
    "link": "/blog/introduction-to-learning-from-learners",
    "desc": "So this piece should provide some insight into why we are starting this blog. There are lots of technical blogs and writings all over the…",
    "date": "2021-11-08",
    "lang": "en",
    "tags": ["software engineering", "testing", "computer science", "learning from learners"],
    "type": "discussion"
  },
  {
    "title": "Amerika’da İkinci Ayım Nasıl Geçti? Bilinmezlikten Bilinirliğe Bir Yolculuk.",
    "id": "amerika%E2%80%99da-i%CC%87kinci-ay%C4%B1m-nas%C4%B1l-ge%C3%A7ti%3F-bilinmezlikten-bilinirli%C4%9Fe-bir-yolculuk.",
    "link": "/blog/amerika%E2%80%99da-i%CC%87kinci-ay%C4%B1m-nas%C4%B1l-ge%C3%A7ti%3F-bilinmezlikten-bilinirli%C4%9Fe-bir-yolculuk.",
    "desc": "Geçen ay ilk ayımın nasıl geçtiğine dair bir yazı yazmıştım, açıkça bakmak gerekirse fazlasıyla negatifti, buraya gelmenin zorlukları…",
    "date": "2021-10-15",
    "lang": "tr",
    "tags": ["phd", "us"],
    "type": "personal"
  },
  {
    "title": "Toplu Mail Linki Nasıl Hazırlanır?",
    "id": "toplu-mail-linki-nas%C4%B1l-haz%C4%B1rlan%C4%B1r%3F",
    "link": "/blog/toplu-mail-linki-nas%C4%B1l-haz%C4%B1rlan%C4%B1r%3F",
    "desc": "Önceki yıllarda toplu mail atılması gerektiğinde aşağıdakileri içeren bir belge hazırlanırdı.",
    "date": "2021-09-24",
    "lang": "tr",
    "tags": ["social movements"],
    "type": "project"
  },
  {
    "title": "Amerika’da İlk Ayım Nasıl Geçti? Öğretici, Şaşırtıcı Derecede Dürüst Bir Anı Defteri.",
    "id": "amerika%E2%80%99da-i%CC%87lk-ay%C4%B1m-nas%C4%B1l-ge%C3%A7ti%3F-%C3%B6%C4%9Fretici%2C-%C5%9Fa%C5%9F%C4%B1rt%C4%B1c%C4%B1-derecede-d%C3%BCr%C3%BCst-bir-an%C4%B1-defteri.",
    "link": "/blog/amerika%E2%80%99da-i%CC%87lk-ay%C4%B1m-nas%C4%B1l-ge%C3%A7ti%3F-%C3%B6%C4%9Fretici%2C-%C5%9Fa%C5%9F%C4%B1rt%C4%B1c%C4%B1-derecede-d%C3%BCr%C3%BCst-bir-an%C4%B1-defteri.",
    "desc": "Selam. Hoş geldin. Eğer uzun süredir beni takip ediyorsan, bu yazıya şaşırmış olabilirsin. Normalde insanlığa faydalı olmaya çalışan bir…",
    "date": "2021-09-24",
    "lang": "tr",
    "tags": ["phd", "us"],
    "type": "personal"
  },
  {
    "title": "The Story of Deviation and Returning",
    "id": "the-story-of-deviation-and-returning",
    "link": "/blog/the-story-of-deviation-and-returning",
    "desc": "I always loved thinking about philosophical discussions and paradoxes. I am amazed that they are so simple at first glance yet so complex…",
    "date": "2021-07-31",
    "lang": "en",
    "tags": [],
    "type": "discussion"
  },
  {
    "title": "ODTÜ’de Bilgisayar Mühendisliği: Nedir? Ne Değildir?",
    "id": "odt%C3%BC%E2%80%99de-bilgisayar-m%C3%BChendisli%C4%9Fi%3A-nedir%3F-ne-de%C4%9Fildir%3F",
    "link": "/blog/odt%C3%BC%E2%80%99de-bilgisayar-m%C3%BChendisli%C4%9Fi%3A-nedir%3F-ne-de%C4%9Fildir%3F",
    "desc": "Bir süredir yeni gelecek arkadaşlara rehber olmasını dilediğim bir yazı yazmak istiyordum, tercih dönemiyle birleştirmek makul geldiği için…",
    "date": "2021-07-28",
    "lang": "tr",
    "tags": ["computer science", "METU"],
    "type": "discussion"
  },
  {
    "title": "Vermek ve Almak: İlişkilere Yeni Bir Bakış Açısı",
    "id": "vermek-ve-almak%3A-i%CC%87li%C5%9Fkilere-yeni-bir-bak%C4%B1%C5%9F-a%C3%A7%C4%B1s%C4%B1",
    "link": "/blog/vermek-ve-almak%3A-i%CC%87li%C5%9Fkilere-yeni-bir-bak%C4%B1%C5%9F-a%C3%A7%C4%B1s%C4%B1",
    "desc": "Önsöz",
    "date": "2021-07-13",
    "lang": "tr",
    "tags": ["social psychology"],
    "type": "discussion"
  },
  {
    "title": "Görüşürüz ODTÜ!",
    "id": "g%C3%B6r%C3%BC%C5%9F%C3%BCr%C3%BCz-odt%C3%BC%21",
    "link": "/blog/g%C3%B6r%C3%BC%C5%9F%C3%BCr%C3%BCz-odt%C3%BC%21",
    "desc": "Bu yazıyı herhalde 6. yazışım, ancak her seferinde tekrar tekrar beğenmediğim için siliyor, siliyor, tekrar yazıyorum. Yaşadığım duyguları…",
    "date": "2021-06-21",
    "lang": "tr",
    "tags": ["METU"],
    "type": "personal"
  },
  {
    "title": "Uzaktan Eğitimle Geçen Bir Yılın Ardından",
    "id": "uzaktan-e%C4%9Fitimle-ge%C3%A7en-bir-y%C4%B1l%C4%B1n-ard%C4%B1ndan",
    "link": "/blog/uzaktan-e%C4%9Fitimle-ge%C3%A7en-bir-y%C4%B1l%C4%B1n-ard%C4%B1ndan",
    "desc": "Bu yazıyı okuyorsanız, öncelikle size teşekkür etmek istiyorum. Şu zor günlerde, psikolojimizin sınırlarının zorlandığı, kendimizi bazen en…",
    "date": "2021-05-19",
    "lang": "tr",
    "tags": ["METU"],
    "type": "discussion"
  },
  {
    "title": "Doktora Başvuruları: Kapsamlı Rehber",
    "id": "doktora-ba%C5%9Fvurular%C4%B1%3A-kapsaml%C4%B1-rehber",
    "link": "/blog/doktora-ba%C5%9Fvurular%C4%B1%3A-kapsaml%C4%B1-rehber",
    "desc": "Daha önceki yazılarımda da kısaca bahsettiğim gibi, geçtiğimiz dönem içerisinde 7 doktora başvurusu yaptım, bunlardan 2 tanesinden ise…",
    "date": "2021-04-13",
    "lang": "tr",
    "tags": ["phd"],
    "type": "tutorial"
  },
  {
    "title": "Lisans Araştırmaları Rehberi: AdımODTÜ Lisans Araştırmaları",
    "id": "lisans-ara%C5%9Ft%C4%B1rmalar%C4%B1-rehberi%3A-ad%C4%B1modt%C3%BC-lisans-ara%C5%9Ft%C4%B1rmalar%C4%B1",
    "link": "/blog/lisans-ara%C5%9Ft%C4%B1rmalar%C4%B1-rehberi%3A-ad%C4%B1modt%C3%BC-lisans-ara%C5%9Ft%C4%B1rmalar%C4%B1",
    "desc": "Lisans araştırmaları ile ilgili ilk yazımda, neden lisansta araştırma yapmamız gerektiğini, bu tecrübenin bize katacaklarını, ne tip…",
    "date": "2021-04-03",
    "lang": "tr",
    "tags": ["research"],
    "type": "tutorial"
  },
  {
    "title": "Seçimler",
    "id": "se%C3%A7imler",
    "link": "/blog/se%C3%A7imler",
    "desc": "Bazen korkuyorum. Gelecek belirsiz, korkutucu, her bir tercihin kelebek etkisi gibi sonuçlarının bizleri nereye götüreceği o kadar…",
    "date": "2021-03-29",
    "lang": "tr",
    "tags": [],
    "type": "discussion"
  },
  {
    "title": "Yurt Dışı Staj: Kabul Aldınız, Peki Ya Şimdi?",
    "id": "yurt-d%C4%B1%C5%9F%C4%B1-staj%3A-kabul-ald%C4%B1n%C4%B1z%2C-peki-ya-%C5%9Fimdi%3F",
    "link": "/blog/yurt-d%C4%B1%C5%9F%C4%B1-staj%3A-kabul-ald%C4%B1n%C4%B1z%2C-peki-ya-%C5%9Fimdi%3F",
    "desc": "Staj başvuru süreçlerinin yavaştan bittiği ya da son zamanlarına yaklaşıldığı, asıl staja hazırlığın yapıldığı bir noktaya geldik. Vizeler…",
    "date": "2021-03-14",
    "lang": "tr",
    "tags": ["internship", "working abroad"],
    "type": "tutorial"
  },
  {
    "title": "Yüksek Lisans Doktora Başvuruları#2: Neden Yüksek Lisans?",
    "id": "y%C3%BCksek-lisans-doktora-ba%C5%9Fvurular%C4%B1%232%3A-neden-y%C3%BCksek-lisans%3F",
    "link": "/blog/y%C3%BCksek-lisans-doktora-ba%C5%9Fvurular%C4%B1%232%3A-neden-y%C3%BCksek-lisans%3F",
    "desc": "Lisans mezuniyeti, pek çoğumuz için hayatımızın en heyecan verici, en kaygı verici, en korkutucu zamanı. Lisanstan mezun olana kadar ne…",
    "date": "2021-02-26",
    "lang": "tr",
    "tags": ["phd"],
    "type": "tutorial"
  },
  {
    "title": "Yüksek Lisans Doktora Başvuruları#1: Şimdi Sizin Aklınızda 2 Soru Var",
    "id": "y%C3%BCksek-lisans-doktora-ba%C5%9Fvurular%C4%B1%231%3A-%C5%9Fimdi-sizin-akl%C4%B1n%C4%B1zda-2-soru-var",
    "link": "/blog/y%C3%BCksek-lisans-doktora-ba%C5%9Fvurular%C4%B1%231%3A-%C5%9Fimdi-sizin-akl%C4%B1n%C4%B1zda-2-soru-var",
    "desc": "Yüksek Lisans/Doktora Nedir? Nasıl Yapılır?",
    "date": "2021-02-23",
    "lang": "tr",
    "tags": ["phd"],
    "type": "tutorial"
  },
  {
    "title": "Staj Rehberi#4 — Eski Stajlar",
    "id": "staj-rehberi%234%E2%80%8A%E2%80%94%E2%80%8Aeski-stajlar",
    "link": "/blog/staj-rehberi%234%E2%80%8A%E2%80%94%E2%80%8Aeski-stajlar",
    "desc": "Dünyanın en iyi pazarlamacısı, herkese her ürünü satabilir. Ancak, dünyanın en iyi hazırlanmış özgeçmişi bile, herkesi işe sokmaya yetmez…",
    "date": "2021-02-17",
    "lang": "tr",
    "tags": ["internship"],
    "type": "tutorial"
  },
  {
    "title": "Staj Rehberi#3 — Projeler",
    "id": "staj-rehberi%233%E2%80%8A%E2%80%94%E2%80%8Aprojeler",
    "link": "/blog/staj-rehberi%233%E2%80%8A%E2%80%94%E2%80%8Aprojeler",
    "desc": "Bundan önceki iki yazıda, staj için iyi bir özgeçmiş ve iyi bir niyet mektubunun nasıl hazırlanacağından bahsetmiştim.",
    "date": "2021-02-07",
    "lang": "tr",
    "tags": ["internship"],
    "type": "tutorial"
  },
  {
    "title": "Staj Rehberi#2 — Niyet Mektubu",
    "id": "staj-rehberi%232%E2%80%8A%E2%80%94%E2%80%8Aniyet-mektubu",
    "link": "/blog/staj-rehberi%232%E2%80%8A%E2%80%94%E2%80%8Aniyet-mektubu",
    "desc": "İnternette hızlı bir arama, özgeçmişle ilgili dağınık da olsa pek çok kaynağa ulaşım sağlıyor. Gerekirse yeterli bir arama sonucunda iyi…",
    "date": "2021-02-02",
    "lang": "tr",
    "tags": ["internship", "cover letter"],
    "type": "tutorial"
  },
  {
    "title": "Staj Rehberi#1 —  Özgeçmiş Hazırlama",
    "id": "staj-rehberi%231%E2%80%8A%E2%80%94%E2%80%8A-%C3%B6zge%C3%A7mi%C5%9F-haz%C4%B1rlama",
    "link": "/blog/staj-rehberi%231%E2%80%8A%E2%80%94%E2%80%8A-%C3%B6zge%C3%A7mi%C5%9F-haz%C4%B1rlama",
    "desc": "Hayal edin, hedefiniz olan şirkette bir insan kaynakları çalışanı olarak yer alıyorsunuz. Staj başvuru döneminin sonlarına doğru, her gün…",
    "date": "2021-01-29",
    "lang": "tr",
    "tags": ["internship", "cv", "resume"],
    "type": "tutorial"
  },
  {
    "title": "Ödediğimiz Bedeller Mi, Ödeyeceklerimiz Mi?",
    "id": "%C3%B6dedi%C4%9Fimiz-bedeller-mi%2C-%C3%B6deyeceklerimiz-mi%3F",
    "link": "/blog/%C3%B6dedi%C4%9Fimiz-bedeller-mi%2C-%C3%B6deyeceklerimiz-mi%3F",
    "desc": "Bir hapishanedeyiz. Beklentilerimizden, hedeflerimizden ve hayallerimizden örülmüş parmaklıkların ardında. Verdiğimiz karar, attığımız…",
    "date": "2021-01-22",
    "lang": "tr",
    "tags": [],
    "type": "discussion"
  },
  {
    "title": "ODTÜ’de Uzaktan Güz Dönemi Nasıl Bitiyor.",
    "id": "odt%C3%BC%E2%80%99de-uzaktan-g%C3%BCz-d%C3%B6nemi-nas%C4%B1l-bitiyor.",
    "link": "/blog/odt%C3%BC%E2%80%99de-uzaktan-g%C3%BCz-d%C3%B6nemi-nas%C4%B1l-bitiyor.",
    "desc": "Merhabalar, ben Alperen, ODTÜ’de son yılım, okulumu daha iyi bir hale getirmek için çabalıyorum. Benle birlikte, yaklaşık 15 kişilik bir…",
    "date": "2021-01-16",
    "lang": "tr",
    "tags": ["METU"],
    "type": "discussion"
  },
  {
    "title": "Post-Covid Monologları#3: Yarını Kaçırmak",
    "id": "post-covid-monologlar%C4%B1%233%3A-yar%C4%B1n%C4%B1-ka%C3%A7%C4%B1rmak",
    "link": "/blog/post-covid-monologlar%C4%B1%233%3A-yar%C4%B1n%C4%B1-ka%C3%A7%C4%B1rmak",
    "desc": "Bugün günlerden 5 Aralık 2021, uyandığımdan beri projeler, ödevler ve derslerle boğuşuyorum. Peki ya sen? Sen ne yaptın bugün, ev…",
    "date": "2021-01-04",
    "lang": "tr",
    "tags": [],
    "type": "discussion"
  },
  {
    "title": "Post-Covid Monologları#2: 2021'e Üç Zincirle Girmek",
    "id": "post-covid-monologlar%C4%B1%232%3A-2021%27e-%C3%BC%C3%A7-zincirle-girmek",
    "link": "/blog/post-covid-monologlar%C4%B1%232%3A-2021%27e-%C3%BC%C3%A7-zincirle-girmek",
    "desc": "Bilenler vardır, Barış Özcan 2015'ten itibaren her yıl başında “Zinciri Kırma” temalı videolar yayınlıyor. Bu videolar, bir fikir, bir…",
    "date": "2021-01-03",
    "lang": "tr",
    "tags": [],
    "type": "discussion"
  },
  {
    "title": "ODTÜ’de Uzaktan Eğitim Dönemi Nasıl Geçiyor?",
    "id": "odt%C3%BC%E2%80%99de-uzaktan-e%C4%9Fitim-d%C3%B6nemi-nas%C4%B1l-ge%C3%A7iyor%3F",
    "link": "/blog/odt%C3%BC%E2%80%99de-uzaktan-e%C4%9Fitim-d%C3%B6nemi-nas%C4%B1l-ge%C3%A7iyor%3F",
    "desc": "12 Mart 2020 Perşembe akşamı okulların 3 haftalık bir ara tatil dönemine girmesi ile başlayan uzaktan eğitim, 9 ay 12 gün sonra hala devam…",
    "date": "2020-12-23",
    "lang": "tr",
    "tags": ["METU"],
    "type": "discussion"
  },
  {
    "title": "Lisans Araştırmaları: Giriş Rehberi",
    "id": "lisans-ara%C5%9Ft%C4%B1rmalar%C4%B1%3A-giri%C5%9F-rehberi",
    "link": "/blog/lisans-ara%C5%9Ft%C4%B1rmalar%C4%B1%3A-giri%C5%9F-rehberi",
    "desc": "Bu yazıya küçük bir dipnotla başlamak iyi olacaktır diye düşünüyorum. Elbette ki kendime bir araştırmacı diyecek niteliklere sahip değilim…",
    "date": "2020-12-17",
    "lang": "tr",
    "tags": ["research"],
    "type": "tutorial"
  },
  {
    "title": "Post-Covid Monologları#1: Unutulan Vedalar",
    "id": "post-covid-monologlar%C4%B1%231%3A-unutulan-vedalar",
    "link": "/blog/post-covid-monologlar%C4%B1%231%3A-unutulan-vedalar",
    "desc": "Salgının 9. ayını geçirdiğimiz şu günlerde, her geçen gün bir öncekinden daha ağır, daha yorucu, daha zor geçiyor.",
    "date": "2020-12-12",
    "lang": "tr",
    "tags": [],
    "type": "discussion"
  },
  {
    "title": "Yurt Dışı Staj: Genişletilmiş Rehber",
    "id": "yurt-d%C4%B1%C5%9F%C4%B1-staj%3A-geni%C5%9Fletilmi%C5%9F-rehber",
    "link": "/blog/yurt-d%C4%B1%C5%9F%C4%B1-staj%3A-geni%C5%9Fletilmi%C5%9F-rehber",
    "desc": "İlk yurt dışı stajıma gittiğimde, küçük çaplı bir yurt dışı staj yazısı yazmaya çabalamıştım, görece başarısız sonucumu şuradan…",
    "date": "2020-12-09",
    "lang": "tr",
    "tags": ["internship", "working abroad"],
    "type": "tutorial"
  },
  {
    "title": "Atam Ne Derdi",
    "id": "atam-ne-derdi",
    "link": "/blog/atam-ne-derdi",
    "desc": "Her 9 Kasım akşamı, hikayeler, gönderiler, fotoğraflarla doluyor sosyal medya. Dün akşam da farklı değildi benim için, bir farklılık…",
    "date": "2020-11-10",
    "lang": "tr",
    "tags": [],
    "type": "discussion"
  },
  {
    "title": "Karantina Günlerinde Akademik Dürüstlük",
    "id": "karantina-g%C3%BCnlerinde-akademik-d%C3%BCr%C3%BCstl%C3%BCk",
    "link": "/blog/karantina-g%C3%BCnlerinde-akademik-d%C3%BCr%C3%BCstl%C3%BCk",
    "desc": "İnsanlık tarihinde oluşturduğumuz tüm sistemler, bir çeşit güven duygusuna, güven inancına dayanıyor.",
    "date": "2020-06-05",
    "lang": "tr",
    "tags": ["academia"],
    "type": "discussion"
  },
  {
    "title": "Kır Aynaları",
    "id": "k%C4%B1r-aynalar%C4%B1",
    "link": "/blog/k%C4%B1r-aynalar%C4%B1",
    "desc": "Hayatta bazı kavramlar vardır; toplumun, insan psikolojisinin, insan evriminin en temelinde yer alır, köklerine dokunurlar. Doğduğumuz…",
    "date": "2019-07-27",
    "lang": "tr",
    "tags": [],
    "type": "discussion"
  },
  {
    "title": "Kaos ve Düzen",
    "id": "kaos-ve-d%C3%BCzen",
    "link": "/blog/kaos-ve-d%C3%BCzen",
    "desc": "Önemli Not: Bu yazı yazarın bir farkındalık yaşadığı andaki adrenalini sonucu yazılmıştır. Gerçekleri ve bilgileri değil, yazarın kişisel…",
    "date": "2019-07-17",
    "lang": "tr",
    "tags": [],
    "type": "discussion"
  },
  {
    "title": "Yurt Dışında Staj",
    "id": "yurt-d%C4%B1%C5%9F%C4%B1nda-staj",
    "link": "/blog/yurt-d%C4%B1%C5%9F%C4%B1nda-staj",
    "desc": "Öncelikle merhabalar, bu yazıyı okuyorsanız, bu demektir ki hayatta şu ana kadar kurduğunuz konfor alanının dışına çıkmayı, akranlarınızın…",
    "date": "2019-06-16",
    "lang": "tr",
    "tags": ["internship", "working abroad"],
    "type": "tutorial"
  }
];

export default data;

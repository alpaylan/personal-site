
Algoritmik Problemler: Kapsamlı Rehber
======================================

Bu yazıda, çoğunlukla [Leetcode](http://leetcode.com) tarzı olarak bahsedilen, aynı zamanda “Competitive Programming”, “Algoritma Sorusu”, “Lanet Olası Algoritmalar” gibi farklı şekillerde de duymuş olabileceğiniz, büyük teknoloji şirketlerinin mülakat süreçlerinde popülerleşmenin ardından pek çok bilgisayar mühendisinin/yazılımcının hayatında ciddi bir yer eden problemler nasıl çözülür, algoritma ve veri yapısı konseptleri nasıl öğrenilir, ne işe yarar, nerede kullanılırı anlatacağım.

Yazıma, sıkça gördüğüm birtakım noktalara kendi bakışımı net bir şekilde koyarak başlamak istiyorum. Yazının kalanı bu kabullere dayanacağı için, eğer katılmıyorsanız bu yazı sizin için faydalı olmayabilir.

1.  “Algoritma ya da veri yapısı bilmek” diye bir konsept yok. “Ben Tree biliyorum” diye bir cümle de yok. **“Algoritmik düşünme” insanda zamanla gelişen, belirli bir noktadan sonra yavaşlasa da bitmeyen bir süreçte öğrenilen bir kabiliyet.** Bazı algoritmaların veya veri yapılarının kodunu yazmayı, zaman ve alan kompleksitesini, hangi durumlarda kullanılabileceğini öğrenmiş olabilirsiniz, bu bilgileri pratikte kullanabilmek ise algoritmik düşünme kabiliyetini geliştirmekle bitiyor.
2.  “Algoritma problemleri” dünya çapında yaygın kullanılan belli algoritmaları ve veri yapılarını, algoritmik teknikleri, kombinatorik ve olasılık gibi matematiksel konseptleri doğru şekilde birleştirmenizi bekleyen birtakım sorular.
3.  “Algoritma problemlerini” çözmek gereksiz değil. Gereksiz olduğunu düşünmenin en büyük sebebi, pek çok yazılım projesinde belli özellikleri feda etmenin kolay olması. Performansı yüksek bir kodu her saniye çalıştırabilirken, performansı düşük bir kodu daha az çalıştırmanın yollarını buluyoruz genelde. Algoritmik verimsizlikleri kullanıcı deneyimini o verimsizliği saklayacak şekilde manipüle ederek saklıyoruz. Algoritmik problemleri çözemiyor olmak, o problemlerin oluşturacağı çözümleri yok saymaya gidiyor dolayısıyla. **Bugün birisi size ben yazdığım hiçbir kodda algoritma kullanmaya ihtiyaç duymadım diyorsa, demek ki belli özellikleri feda etmiş, ya da daha kötüsü o özelliklerin var olabileceğini düşünmemiş bile.** Burada, bir tip hayatta kalma yanılgısına düşüyor insanlar.

Bu kabuller ile yazımıza başlayalım.

Şimdi sizin aklınızda iki soru var, algoritma sorusu nedir, nasıl çözülür?
==========================================================================

Algoritma soruları, her şeyden önce örüntü tanımayı gerektiriyor. Örüntü tanımanın 2 adet temel faydası var.

1.  Soruda verilmiş girdi-çıktı örneklerini kolayca genele yayabilmek için o girdi-çıktılardaki örüntüleri yakalamak gerekiyor.
2.  Algoritmik problemler çoğu zaman özyinelemeli(recursive) yapılara sahip. Bir problemi öz yinelemeli bir şekilde ifade edebilmek de problemin kendi iç örüntülerini tanımayı gerektiriyor.

Örnek vereyim mesela, benim çok sevdiğim bir leetcode sorusu var, adı da [**Next Permutation(Sıradaki Sıralama)**](https://leetcode.com/problems/next-permutation/). Bize herhangi bir dizi veriliyor, dizinin sıradaki permütasyonunu bulmamız isteniyor. Problemin çözümündeki en anahtar adım ise permütasyonun doğası itibariyle özyinelemeli olduğunu fark etmek. Başka bir yazıda bu probleme detaylı bir çözüm yazacağım, ancak şu anda denemek isterseniz oturup biraz çözmeye çalışmanızı tavsiye ederim.

Peki neden ben bu soruyu çok seviyorum biliyor musunuz? Normal şartlarda algoritma sorularıyla ilgili yapılan yorumların neredeyse hiçbiri geçerli değil çünkü bu soru için. Bu soruyu herhangi bir dilde çözmek diğerinden daha kolay değil, soru ne bir veri yapısı(linked list, binary search tree vb.) hakkında bilgi gerektiriyor, ne de bir algoritma hakkında. Yapmanız gereken tek şey örüntüleri çözmek.

Bazı başka sorular böyle değil tabii ki, bazen direkt olarak spesifik bir veri yapısının kendisiyle ilgili sorular geliyor. “Linked List Reversal(ters çevirme) fonksiyonu yaz”, “Binary Search Tree Insertion(eleman ekleme) fonksiyonu yaz” gibi… Bu tarz soruların çözümü ise bu veri yapılarını (1) görselleştirebilmeyi, (2) daha önce yazmış olmayı gerektiriyor. Daha önce hiç Binary Search Tree yazmadıysanız, mülakat esnasında bir anda icat etmeniz çok olası değil.

Görselleştirme için 2 adet web sitesi tavsiye ediyorum. Özellikle Tree ve Graph problemleri için problemi ve çözümü kafanızda canlandırabilmek aşırı önemli.

1.  [https://visualgo.net/en](https://visualgo.net/en)
2.  [https://www.cs.usfca.edu/~galles/visualization/Algorithms.html](https://www.cs.usfca.edu/~galles/visualization/Algorithms.html)

Görselleştirme ve pratiğin yanında şahsen bence öğrenebileceğiniz en önemli kabiliyet öz yinelemeli(recursive) düşünmeyi öğrenmek. Recursive düşünmek ne demek peki, biraz da bundan bahsedeyim.

Öz yineleme ile düşünmek, bir problemi kendinden daha küçük parçalara bölüp, problemin çözümünü parçaların çözümü ile birleştirmeye dayanıyor. Örnek veriyorum, bir ağacın derinliğine bakarken, çocuklarının derinliklerinin maksimumuna 1 ekliyoruz aşağıdaki gibi.

```
type Tree = { tag: "Node", children: Tree\[\]} | { tag: "Leaf" }  
const height = (tree) => {  
  if (tree.tag === "Leaf") {  
    return 1;  
  } else {  
    return 1 + Math.max(tree.children.map((child) => child.height()))  
  }  
}
```

Burada çözümün mantıklı olma sebebi bir ağacın yüksekliğinin çocuklarının yüksekliklerinin üzerinden tanımlanabiliyor olması. Öz yinelemeyi akılda tutarak kod yazmak da bu tarz bağlantıları sürekli kurmak demek. Bu kod yazma tarzının en büyük avantajı(bence) lokal düşünmeye izin vermesi. Yalnızca şu anda elimizde bulunan ağaca odaklanabiliyoruz çocuklarına hiç bakmadan.

E peki hocam iyi güzel diyorsun da biz nasıl öğreneceğiz bunları?
=================================================================

Bu noktaya kadar dedik ki örüntü çözebilmek lazım, pratik lazım, görselleştirme lazım, recursive düşünme lazım, e peki bunları öğrenmek için en iyi yol nedir? Birisi oturup kurs mu almalı, leetcode mu çözmeli?

Bence şahsen öğrenmenin en iyi yolu pratik, ki ben bunu yıllarca bu işin pratiğinden kaçmış bir insan olarak söylüyorum. Bol bol kod yazmak, alışmak gerekiyor. Bir ağaç ya da graf tanımının refleksif olarak omurgadan yazılabilir hale gelmesi gerekiyor. Peki pratiğin ilk aşaması ne? Leetcode kolay soruları çözmek mi mesela?

Benim bu konuda şahsen biraz farklı bir görüşüm var. Ben programlamaya aşağıda bıraktığım dökümandaki egzersizleri çözerek başladım. Aşağı, yukarı, ters, düz, içi dolu/boş bir sürü ağaç çizerdim farklı şekillerde. Ağaç egzersizlerinin en iyi tarafı görsel bir çıktının sayının fonksiyonu olarak ortaya çıkması. Bu tarz egzersizler ekstra bir bilgi öğrenme gereği oluşturmadan kendi kendinize algoritmik düşünme kabiliyetini geliştirme fırsatı veriyor başlangıç aşamasında.

Giriş problemlerini bitirdikten sonra, yapılabilecek en iyi şey herhangi bir hazır veri yapısına ya da algoritmaya ihtiyaç duymadığınız problemlerle ilgilenmeye devam etmek iyice rahat hale gelene kadar. Burada çeviri problemleri güzel bir giriş noktası olabilir. [Roma Rakamlarından Sayıya Çeviri](https://leetcode.com/problems/roman-to-integer/), [String’den Sayıya Çeviri](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt), [Farklı Sayı Tabanları Arasında Çeviri](https://leetcode.com/problems/base-7/)… Benzer şekilde [String Halindeki 2 Sayıyı Toplama](https://leetcode.com/problems/add-strings/), [İkili Tabanda Toplama](https://leetcode.com/problems/add-binary/), gibi problemlerle ilgilenebilirsiniz. Toplama problemlerini çıkarma/çarpma/bölme için de yapabilirsiniz. Yine herhangi bir algoritma/veri yapısı kullanmadan çözebileceğiniz problemler [Project Euler Sorularını](https://projecteuler.net/archives) kullanabilirsiniz.

Bu noktada zaten bir yandan kullanıyor olacağınız Array bazlı problemlerle ilgilenmeye başlayabilirsiniz. Search ve Sort problemleri array ile ilgili en sık göreceğiniz problemler. Burada yapılan en büyük hata ise bunların arkasındaki konseptleri anlamadan koda odaklanmak. Burada 2 adet kod örneği koyalım ortaya neden bahsettiğimi somutlaştırmak için.

Aşağıda, Google’a Insertion Sort yazdığım ilk çıkan [Geeks for Geeks](https://www.geeksforgeeks.org/insertion-sort/)’deki kodu görüyorsunuz.

```
function insertionSort(arr, n)    
{    
    let i, key, j;    
    for (i = 1; i < n; i++)   
    {    
        key = arr\[i\];    
        j = i - 1;    
     
        /\* Move elements of arr\[0..i-1\], that are    
        greater than key, to one position ahead    
        of their current position \*/  
        while (j >= 0 && arr\[j\] > key)   
        {    
            arr\[j + 1\] = arr\[j\];    
            j = j - 1;    
        }    
        arr\[j + 1\] = key;    
    }    
} 
```

Aslında bu kodun çok daha okunabilir bir versiyonu yazılabilir.

```
// 1. Diziyi ikiye ayır, sıralanmış ve sıralanmamış kısım olarak.  
// 2. Sıralanmamış dizinin ilk elemanını al, onu sıralanmış dizinin   
// içinde doğru yere yerleştir.  
// 3. Sıralanmamış dizi bitene kadar devam et.  
  
  
// Bu fonksiyon, dizinin n'inci elemanını dizinin 0..n-1'lik  
// baş kısmında ne noktaya yerleştirmesi gerektiğine karar verecek.  
function findSortedPlace(arr, n) {  
  let i;  
  // Eğer n'inci eleman ilk elemandan küçükse, en başa yerleşmeli.  
  if (arr\[n\] <= arr\[0\]) {  
    return 0;  
  }  
  
  // Eğer n'inci eleman dizideki iki elemanın arasındaysa, ikinci  
  // elemanın pozisyonuna yerleşmeli.  
  for(i = 0; i < n - 1 ; i++) {  
    if (arr\[n\] >= arr\[i\] && arr\[n\] <= arr\[i + 1\]) {  
      return n + 1;  
    }  
  }  
    
  // Eğer tüm elemanlardan büyükse, yerinde kalmalı.  
  return n  
     
}  
  
// Bu fonksiyon, dizinin k'ıncı elemanından itibaren n'inci  
// elemana kadar tüm elemanları 1 sağa kaydırmalı.  
function shiftArray(arr, k, n) {  
  let i;  
  // Sağdan sola gidiyoruz ki sildiğimiz elemanları ayrıca tutmak zorunda  
  // kalmayalım. Eğer kafanızda oturmuyorsa, soldan sağa gittiğimizde  
  // ne olacağını düşünmeyi egzersiz olarak yapabilirsiniz.  
  for (i = n - 1; i >= k ;i--) {  
    arr\[i+1\] = arr\[i\];  
  }  
}  
  
// Bu fonksiyon, dizinin n'inci elemanı dizinin 0..n-1'lik   
// baş kısmında doğru yere yerleştirecek.  
function insertSorted(arr, n) {  
  // Elemanı kaydet.  
  const element = arr\[n\];  
  // Elemanın gelmesi gereken yeri bul.  
  const place = findSortedPlace(arr, n);  
  // Elemanın geleceği yerden itibaren elemanları kaydır.  
  shiftArray(arr, place, n);  
  // Elemanı yerleştir.  
  arr\[place\] = element;  
}
```

Probleme bu şekilde hiyerarşik ve fonksiyonel yaklaştığımızda, i = n mi olacaktı n-1 mi gibi tartışmaları geride bırakabiliyoruz. Çünkü aslında bu algoritmaların hepsinin kendi içinde belli bir yapısı, bir hiyerarşisi, bir sistemi var. Geeks for Geeks gibi sitelerdeki kodların en büyük problemi bu hiyerarşiyi yok etmeleri, arkadaki konseptleri silmeleri.

Search ve Sort problemlerinden sonra artık ilk dil dışı veri yapınızla ilgilenmeye başlayabilirsiniz, Linked List. Burada önemli olan nokta, kullandığınız dillerin sizlere Array’ler ile uğraşmak için çok ciddi bir altyapı sağlıyor olması. Kendi veri yapınızda böyle bir lüksünüz yok, her detayla sizin ilgilenmeniz gerekiyor. Aynı şekilde, Linked List’e geçerken bir de parantez açmak gerek, çünkü genelde “Linked List ne abi hiçbir zaman kullanmayacağım napıyorum” gibi bir bakış açısı var.

> Linked List, karşınıza çıkabilecek en basit veri yapılarından bir tanesi. Linked List sorulara da size Graph ya da Tree gibi yapıların sorularını çözmeye yardımcı olacak refleksler kazandırıyor. Görselleştirmenin işe yaradığı ilk problem Linked List mesela. Linked List sorularını çözmeden de bu konseptleri öğrenebilirsiniz tabii ki, ama toplama öğrenmeden çarpma öğrenmeye eşdeğer bir durumla karşılaşıyor olma şansınız çok yüksek.

Linked List ile ilgili konseptleri öğrenmek için, bir Linked List’in arayüzünü yazmak yeterli bence çoğu zaman. Favori dilinizdeki Array/Vector kütüphanesindeki fonksiyonlardan ilginizi çekenleri(insert, find, remove, index, length, reverse, merge, concat) doğru bir şekilde yazıp test edebiliyorsanız, kalan yolda stack, queue, deque, binary tree, nary tree, heap, graph vb gibi çok fazla veri yapısı var. Bunların hepsini tabii ki bir tane blog yazısında tartışmayacağım, ancak neden önemli olduklarını biraz konuşmak lazım.

Personal Opinion Alert!
-----------------------

Bir yazılımcının asıl işi kod yazmak değil. Kod yazmak bir araç, bir yazılımcının asıl işi modelleme yapmak. Kullanıcının aksiyonlarını, uygulamadaki verileri, verilerin kullanıcıya nasıl sunulduğunu modellemek, bunların arasında bir ilişki kurmak. Eğer ki siz, yazılımcı olarak doğru modelleme araçlarına sahip değilseniz, o noktada [elinde sadece çekiç olan ustaya](https://eksisozluk1923.com/elinde-cekic-olan-her-seyi-civi-sanir--830764) benzersiniz. Üzerine çalıştığınız problemde bir ağaç yapısı gördüğünüzde onu tanıyamazsanız, onu bir array ile modelleyebilirsiniz tabii ki. Elimizde tarihin gördüğü en güçlü makineler var, saniyede milyonlarca işlem yapabiliyorlar sonuçta, bir ağaçta 10 işlem yapmak yerine bir array’de 1000 işlem yapmak çoğu zaman bir problem değil, problem olduğu noktaya kadar. Ölçek büyüdükçe, daha fazla kullanıcıya ulaştıkça, daha fazla problem çözdükçe, aynı anda daha fazla kod çalıştırdıkça yanlış modellemenin getirdiği verimsizlikler birikmeye başlıyor. O noktada da en başta hayatta kalma yanılgısı ile bahsettiğim gibi, çoğu zaman eldeki imkanlar neticesinde kullanıcı arayüzleri dizayn ediliyor, aslında kullanıcıya daha iyi hizmet verebilecek özellikler belki de hiçbir zaman sahaya sürülmüyor, tartışılmıyor. Bir kodu kullanıcının her mouse hareketinde çalıştırmakla, her klavyeye basışında çalıştırmakla, her kaydet butonuna bastığında çalıştırmak arasındaki en büyük fark, bu kodun ne kadar hızlı çalışabildiği oluyor bir noktada.

Toplayıp Kapatalım
==================

Biraz dağınık bir yazı oldu, ben de kendi kafamı aşırı toplayamadım ama yayınlıyorum artık bu şekilde şimdilik, sonrasında güncellerim biraz da belki.

1.  Algoritmik problem çözmenin temellerinde örüntü tanıma, öz yinelemeli düşünebilme, yaygın veri yapıları ve algoritmalarla haşır neşir olma, bol bol pratik yapma var.
2.  Algoritmik problem çözme kabiliyetini geliştirebilmek için yazıda benim şahsen mantıklı gördüğüm aşırı da detaylandırılmamış bir yol haritası var. Veri yapıları ve algoritmalara girmeden daha basit, mantıksal ve matematiksel problemlerle başlayan, sonrasında Linked List/Binary Tree gibi basit yapıların kendi arayüzlerini yazmakla devam eden. Deneyip yorum yapan olursa yorumlarını beklerim.
3.  (bence) Bu konseptleri öğrenmek sizi daha iyi bir mühendis yapacak.

Umarım faydalı bir yazı olmuştur, buraya kadar okuyan herkese teşekkür ediyorum, iyi günler dilerim.

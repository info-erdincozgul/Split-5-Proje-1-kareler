# Dinamik Kareler Uygulaması
## Proje Hakkında
Bu proje, React kullanarak, tıklanan karelerin durumunu değiştiren basit ve interaktif bir arayüz uygulamasıdır. Kullanıcı arayüzünde dört adet kare bulunur ve bu karelere tıklandığında aşağıdaki mantıkla renkleri değişir:
* Tıklama: Bir kareye tıklandığında, kare yeşil renge döner.
* İkinci Tıklama: Yeşil olan bir kareye tekrar tıklandığında, kare eski rengine dönerek söner.
Bu uygulama, React'ın state yönetimi (useState), props kullanımı ve olay yönetimi (onClick) gibi temel kavramlarını pratik bir şekilde sergiler.
## Proje Yapısı
Proje aşağıdaki temel dosyalardan oluşur:
* Kareler.js: Uygulamanın ana bileşenidir. Karelerin durumunu yönetir, her bir kareyi oluşturur ve tıklama olaylarını işler.
* index.css: Karelerin ve sayfanın genel stilini belirler. active sınıfı, karelerin yeşil renge dönmesi için kullanılır.
* index.html: Uygulamanın temel HTML iskeletini içerir.
## Nasıl Çalıştırılır?
Bu projeyi yerel ortamınızda çalıştırmak için Node.js ve npm'in kurulu olması gerekir.
1. Gerekli Paketleri Yükleyin: Proje klasörünüzün terminalinde aşağıdaki komutu çalıştırarak gerekli bağımlılıkları yükleyin:
```
Bash
npm install
```
2. Uygulamayı Başlatın: Bağımlılıklar yüklendikten sonra, uygulamayı geliştirme modunda başlatmak için aşağıdaki komutu kullanın:
```
Bash
npm run dev
```
3. Tarayıcıda Görüntüleyin: Komut çalıştıktan sonra, projeniz genellikle http://localhost:5173 adresinde otomatik olarak açılır. Eğer açılmazsa, bu adresi tarayıcınızın adres çubuğuna elle yazarak görüntüleyebilirsiniz.
## Kazanımlar
Bu proje, aşağıdaki temel React ve web geliştirme konularında pratik yapmanızı sağlar:
* State Yönetimi (useState): Bileşenlerin dinamik verilerini yönetme ve arayüzü bu verilere göre güncelleme.
* Olay Yönetimi (onClick): Kullanıcı etkileşimlerine tepki veren fonksiyonlar yazma.
* Props ve Durum İlişkisi: Bir bileşenin prop'larının (örneğin, className prop'unun) nasıl state'e bağlı olarak değiştiğini anlama.
* Dinamik Liste Oluşturma (.map()): Bir dizideki her öğe için DOM'da dinamik olarak bileşenler (<div>) oluşturma.
* Conditional Rendering: Bir koşula bağlı olarak (örneğin, bir karenin aktif olup olmamasına göre) farklı sınıflar (active) uygulama.
# PowerBI Terorosimus

[Odkaz na soubory](https://www.uschovna.cz/zasilka/TS9YAUELRCZ5RP3B-8VN/)[web:1]

---

## 20 bodů, na které jsem se zaměřil

### Proximity (Blízkost)
Věci, které patří k sobě, dávám k sobě. Filtry od nich oddělím, aby z toho nevznikl guláš, kde není jasné, co s čím souvisí.

### Similarity (Podobnost)
Barvy používám konzistentně napříč celým reportem.

### Enclosure (Ohraničení)
Grafy na druhé stránce jsou jasně ohraničené.

### Closure (Uzavření)
Netahám okolo každého grafu masivní rámečky, protože mozek si hranice dokáže domyslet jen z bílého místa. Spolehnu se na whitespace – vizuál pak působí čistěji a méně rušivě.

### Continuity (Spojitost)
Vizuály zarovnávám do mřížky, aby oko mohlo přirozeně „jet po linii“. Levá hrana nadpisu lícuje s levou hranou grafu pod ním, bez mikroposunů o pár pixelů; na druhé straně se to daří lépe než na první.

### Connection (Propojení)
Ve spojnicovém grafu používám čáru tam, kde dává smysl spojit bod.

### De‑clutter (Odstraňování šumu)
Všechno, co nepomáhá pointě, bez milosti mažu. Gridlines, zbytečné osy a dekorace jdou pryč, pokud mám datové popisky a uživatel se v grafu zorientuje i bez nich.

### Barva pro pozornost, ne dekoraci
Nepouštím si do dashboardu barevnou diskotéku, snažím se zvolit decentní barevné schéma. Většinu věcí dávám do odstínů modré.

### Titulek vypráví příběh
Nadpis nepíšu jako „Počet útoků dle roku“, ale rovnou jasný popis. Uživatel tak i bez hlubší analýzy hned ví, co je hlavní message grafu.

### Nikdo nemá rád koláče…
Když porovnávám regiony a je jich víc než tři, koláč nechávám být a sahám po pruhovém grafu. Lidské oko mnohem lépe porovnává délky než úhly, takže bar chart je čitelnější.

### Seřazení dat
Pruhové grafy, které nejsou časová řada, řadím od největší hodnoty po nejmenší. Nutí to čtenáře začít od toho nejdůležitějšího a zbytečně neskákat po ose sem a tam.

### Direct labeling
Když to jde, dávám popisky sérií přímo k čarám nebo sloupcům, místo aby uživatel lovil v legendě pod nebo vedle grafu. Oči pak nemusí neustále kmitat mezi legendou a daty.

### Hierarchie písma
Držím jasnou typografickou hierarchii: například nadpis stránky kolem 24 pt, nadpis grafu 14 pt a popisky os 9 pt. Tím vedu oko uživatele – hned vidí, co je „headline“ a co je detail; před odevzdáním jsem to ladil i přes témata, protože Power BI občas protestovalo.

### Z‑pattern
Dashboard skládám s tím, že uživatel čte ve tvaru „Z“. Nejdůležitější KPI dávám vlevo nahoře, naopak věci jako zdroje, copyright nebo poznámky klidně odsouvám doprava dolů.

### Interaktivita
Hlídám, aby kliknutí na vizuál dávalo smysl – třeba klik na region přefiltruje zbytek stránky.

### Drill‑down
Buduu hierarchie tak, aby se dalo intuitivně drillovat, třeba Region → Stát → další úroveň. Uživatel pak může z jednoho grafu přirozeně „zoomovat“ do detailu, aniž by musel přeskakovat na jinou stránku; podstatná data jsou na druhé stránce.

### Konzistentní formát čísel
Čísla nenechávám ve formátu typu 154846.54, pokud to není finanční údaj, kde ta přesnost dává smysl. Pro počty osob používám oddělovače tisíců a klidně zkrácené tvary jako „155 tis.“, aby se hodnoty lépe četly; tisíce nechávám jako tisíce a stovky jako stovky.

### Negative space (bílé místo)
Nebojím se prázdných ploch – raději méně vizuálů a přehledně, než dashboard, který působí jako excelový sheet na steroidech. Přeplácaný report uživatel často vzdá už na první pohled.

### Accessibility (přístupnost)
Kontroluji kontrast barev a myslím na barvoslepé – typicky se vyhýbám kombinacím červená vs. zelená a raději používám třeba oranžová vs. modrá. Snažím se držet doporučené kontrastní poměry podle WCAG, aby byl text a grafy dobře čitelné.

### Pohled laika – testováno na lidech
Nechal jsem na data nakouknout pár lidí a zhodnotit, co si o tom nezávisle myslí. Reakce byly vesměs pozitivní.

# ISKM55: Analýza dopravních nehod v Brně


---

## 🎯 Přehled Projektu

Komplexní analytický projekt zaměřený na identifikaci kombinací faktorů přispívajících k dopravním nehodám s těžšími následky na území města Brna.

**Období:** 2010–2025  
**Zdroj:** [data.gov.cz](https://data.gov.cz/)  
**Počet záznamů:** ~74 099 nehod  
**Nástroje:** Python (ETL), Power BI, statistické testování

---

## 🔍 Klíčová Zjištění

### 1. **Alkohol vs neAlkohol**
- **RR = 0,88** (neprůkazné)
- χ² test: **χ² = 0,04, p = 0,84**
- **Závěr:** Nelze zamítnout H₀ nezávislosti
- <img width="292" height="152" alt="image" src="https://github.com/user-attachments/assets/7eb651dd-5be5-4e01-ab4a-c4741d00d61f" />


### 2. **Rychlost na mokré vozovce**
- **RR = 1,16** (16% vyšší riziko zranění)
- z-test: **z = 1,98, p = 0,048**
- **Závěr:** Statisticky významný rozdíl
- <img width="332" height="126" alt="image" src="https://github.com/user-attachments/assets/e80790bc-6780-4c53-9f82-fbb211b628ec" />


### 3. **Nedodržení vzdálenosti**
- **RR = 2,55** (2,5× vyšší riziko)
- z-test: **z = 11,16, p < 0,001**
- **Závěr:** Vysoce signifikantní
- <img width="311" height="148" alt="image" src="https://github.com/user-attachments/assets/9bf0296e-097f-4656-85d8-0ac274e5e4a9" />


### 4. **Vliv typu komunikace**
- ANOVA: **F(3, 74095) = 1631,0, p < 0,001**
- **Závěr:** Typ komunikace má vliv na škodu
- <img width="1322" height="272" alt="image" src="https://github.com/user-attachments/assets/8d478da1-6aea-49e8-a796-a8e62a31c4f1" />


### 5. **Alkohol × Noc × Viditelnost**
- Logistická regrese:
  - **Alkohol:** OR = 1,37, p = 0,09
  - **Noc:** OR = 0,36, p < 0,001
  - **Viditelnost:** OR = 1,40, p = 0,056
<img width="1412" height="776" alt="image" src="https://github.com/user-attachments/assets/b2288c98-64d0-4fa4-8554-31fe1279420b" />

---

## 📊 Výstupy

1. Python ETL Pipeline 
2. Power BI Dashboard 
3. DAX Míry
4. Statistické testy

---

## 📁 Struktura

```
ISKM55_projekt/
├── README.md
├── ISKM55_python_etl.py
├── ISKM55_PowerBI_DAX_Measures.dax
├── /data/
│   └── data_brno.csv
└── /output/
    ├── /power_bi_data/
    ├── /analysis/
    └── /logs/
```

---

## 🗺️ Power BI Dashboard – Popis Stránek

### **Stránka 1: Geografická Analýza**

**Obsah:**
- Heatmapa nehod v Brně
- KPI
- Vývoj v čase


**Účel:** Prostorové rozložení + identifikace rizik

---

### **Stránka 2: Faktory Nehod, Demografie**

**Obsah:**
- Kontingenční tabulka: Příčina × závažnost
- Tabulka: Smrtelnost podle alkoholu × noc × viditelnost
- Kombinovaný graf: Typ komunikace – škoda vs zranění
- Sloupcový graf: Počet nehod podle věkové skupiny a pohlaví
- Interaktivní s filtry (rok, měsíc, den/noc)

**Účel:** Analýza distribuce závažnosti, věkový profil

---

### **Stránka 3: Podklady pro analýzu**

**Obsah:**
- Karty: Počet nehod, zraněných, usmrcených, FatalityRate, celková škoda
- Area chart: Vývoj nehod v čase podle závažnosti
- Tabulka: Top příčiny nehod
-

**Účel:** Časový trend + prostorová analýza

---

## 📈 Výzkumné Podotázky (PQ1–PQ5)

**Pod otázka 1:** Závažnost vs hlavní důvod (χ² test)  
**Pod otázka 2:** Typ komunikace vs škoda & zranění (ANOVA)  
**Pod otázka 3:** Alkohol × čas × viditelnost (logistická regrese)  
**Pod otázka 4:** Městské části × typ vozidla (prostorová analýza)  
**Pod otázka 5:** Demografie × bezpečnostní prvky (Cox regrese)

---

## 🔬 Metodologie

### **1. Zdroj dat**

**Zdroj:** data.gov.cz - Dopravní nehody Brno (2010–2025)  
**Formát:** CSV (~500 MB, ~74 099 záznamů)

**Klíčové dimenze:**
- **Časová:** datum, čas, den_v_týdnu, měsíc, rok, den/noc
- **Lokační:** městská_část, ulice, gps_lat, gps_lon, druh_komunikace
- **Nehoda:** hlavní_příčina, typ_nehody, závažnost, počet_zraněných, usmrcených, škoda
- **Povětrnostní:** počasí, stav_vozovky, viditelnost
- **Řidič:** alkohol, věk, pohlaví
- **Bezpečnost:** pásy, dětská_sedačka, airbag

---

### **2. Předzpracování (ETL)**

1. Filtrování na území Brna (2010+)
2. Odstranění chybějících hodnot
3. Sjednocení kategorií:
   - Typ komunikace → 4 skupiny
   - Hlavní příčina → 6 kategorií
4. Věkové kategorie: 0–17, 18–25, 26–45, 46–65, 66+

---

### **3. Statistické metody**

#### **Pod otázka 1: χ² test nezávislosti**
- **H₀:** Závažnost a příčina jsou nezávislé
- **Vzorec:** χ² = Σ[(O - E)² / E]
- **Velikost efektu:** Cramér's V

#### **Pod otázka 2: ANOVA**
- **H₀:** Průměrná škoda je stejná napříč typů
- **Test:** F = MSbetween / MSwithin
- **Post-hoc:** Tukey HSD

#### **Pod otázka 3: Logistická regrese**
- **Model:** log(p/(1-p)) = β₀ + β₁×alkohol + β₂×noc + β₃×viditelnost
- **Výstup:** Odds ratio, 95% CI, p-values

#### **Pod otázka 4: Prostorová analýza**
- Grid-based agregace (200×200 m)
- Hotspot detekce: Getis-Ord G*
- Clustering: DBSCAN

#### **Pod otázka 5: Cox / Logistická regrese**
- **Závislá:** Těžký následek (ano/ne)
- **Prediktory:** Věk, pohlaví, pásy, airbag
- **Výstup:** Hazard ratios / Odds ratios

---

## 🎯 Závěry a doporučení

### **Hlavní zjištění**

1. **Alkohol není jednoznačný prediktor** (RR=0.88, p=0.84)
   - Možné vysvětlení: malý vzorek, reporting bias
   
2. **Rychlost na mokru zvyšuje riziko** (RR=1.16, p=0.048)
   - Doporučení: kampaň na adaptaci rychlosti

3. **Nedodržení vzdálenosti je extrémně nebezpečné** (RR=2.55, p<0.001)
   - Doporučení: technologie ACC systémy

4. **Typ komunikace ovlivňuje škodu** (F=1631, p<0.001)
   - Dálnice: nejvyšší průměrná škoda
   - Místní: nižší škoda, ale nejvyšší četnost

5. **Noční nehody mají nižší smrtelnost** (OR=0.36, p<0.001)
   - Pravděpodobně nižší rychlosti a intenzita

### **Praktická doporučení**

**Pro městskou policii:**
- Zvýšit kontroly dodržování bezpečné vzdálenosti
- Monitoring hotspotů
- Kampaň proti rychlosti na mokré vozovce

**Pro dopravní inženýry:**
- Úpravy křižovatek v hotspot oblastech
- Instalace protihlukových opatření na dálnicích
- Lepší osvětlení problematických úseků

**Pro vzdělávací instituce:**
- Zaměřit kurzy mladých řidičů (18–25) na udržování odstupu !!!
- Simulátory pro jízdu za snížené viditelnosti
- Praktický nácvik pro mokrou vozovku

### **Budoucí výzkum**

1. Zohlednit dopravní intenzitu (normalizace)
2. Časová analýza trendů
3. Prediktivní modelování (ML)
4. Ekonomická analýza (cost-benefit)

---

## 📚 Reference

**Data:**
- [data.gov.cz](https://data.gov.cz/)
- Policie ČR: Statistiky nehodovosti

**Metodologie:**
- BESIP: Metodika analýzy dopravních nehod
- ISO 39001: Road Traffic Safety Management

**Nástroje:**
- Python 3.11 + pandas, scipy, statsmodels
- Power BI Desktop (2025)
- ArcGIS Maps for Power BI

---

## 👤 Autor

**Projekt:** ISKM55 - Analýza dopravních nehod v Brně  
**Autor:** Jiří Pitek (UČO: 584602)
**Datum:** Leden 2026  
**Verze:** 1.1  


**🎉 Odkaz ke stažení: **
https://drive.google.com/file/d/1yMz1-KQvO1MV5MPsDqg75nOdVE8wvOn0/view?usp=drive_link

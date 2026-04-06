import { useState, useEffect } from "react";

export default function FantiniBuilder() {
  const [result, setResult] = useState(null);
  const [stats, setStats] = useState(null);

  useEffect(() => {
    // Parse the raw Fantini accessory data
    // Format: ProductionTime | CollectionName | FamilyName | SeriesName | ProductName | Descr | ItemCode | - | ConfigCode | Finish | Price
    const raw = `A	ACCESSORIES	ICONA	Icona	12'' Towel bar		H806	-	9302H806	Chrome	$1004
A	ACCESSORIES	ICONA	Icona	18'' Towel bar		H811	-	9302H811	Chrome	$1033
A	ACCESSORIES	ICONA	Icona	24'' Towel bar		H807	-	9302H807	Chrome	$1060
A	ACCESSORIES	ICONA	Icona	Wall-mount hook		H808	-	9302H808	Chrome	$424
A	ACCESSORIES	ICONA	Icona	Toilet paper holder		H845	-	9302H845	Chrome	$552
A	ACCESSORIES	ICONA	Icona	Wall-mount soap dish		7669	-	96027669	Chrome	$655
A	ACCESSORIES	ICONA	Icona	Wall-mount tumbler		7670	-	96027670	Chrome	$717
A	ACCESSORIES	ICONA	Icona	Wall-mount liquid soap dispenser		7671	-	96027671	Chrome	$818
A	ACCESSORIES	ICONA	Icona	Wall-mount toilet brush holder		7672	-	96027672	Chrome	$805
C	ACCESSORIES	ICONA	Icona	12'' Towel bar		H806	-	9313H806	Matte Black	$1205
C	ACCESSORIES	ICONA	Icona	12'' Towel bar		H806	-	9395H806	Polished Nickel PVD	$1506
C	ACCESSORIES	ICONA	Icona	12'' Towel bar		H806	-	93P5H806	Matte Gun Metal PVD	$1506
C	ACCESSORIES	ICONA	Icona	12'' Towel bar		H806	-	93P6H806	Matte British Gold PVD	$1506
C	ACCESSORIES	ICONA	Icona	12'' Towel bar		H806	-	93P9H806	Matte Copper PVD	$1506
C	ACCESSORIES	ICONA	Icona	12'' Towel bar		H806	-	93S1H806	Deep Black PVD	$1506
C	ACCESSORIES	ICONA	Icona	12'' Towel bar		H806	-	93Q7H806	Pure Brass PVD	$1606
C	ACCESSORIES	ICONA	Icona	12'' Towel bar		H806	-	93Q8H806	Raw Metal PVD	$1606
C	ACCESSORIES	ICONA	Icona	18'' Towel bar		H811	-	9313H811	Matte Black	$1240
C	ACCESSORIES	ICONA	Icona	18'' Towel bar		H811	-	9395H811	Polished Nickel PVD	$1550
C	ACCESSORIES	ICONA	Icona	18'' Towel bar		H811	-	93P5H811	Matte Gun Metal PVD	$1550
C	ACCESSORIES	ICONA	Icona	18'' Towel bar		H811	-	93P6H811	Matte British Gold PVD	$1550
C	ACCESSORIES	ICONA	Icona	18'' Towel bar		H811	-	93P9H811	Matte Copper PVD	$1550
C	ACCESSORIES	ICONA	Icona	18'' Towel bar		H811	-	93S1H811	Deep Black PVD	$1550
C	ACCESSORIES	ICONA	Icona	18'' Towel bar		H811	-	93Q7H811	Pure Brass PVD	$1652
C	ACCESSORIES	ICONA	Icona	18'' Towel bar		H811	-	93Q8H811	Raw Metal PVD	$1652
C	ACCESSORIES	ICONA	Icona	24'' Towel bar		H807	-	9313H807	Matte Black	$1271
C	ACCESSORIES	ICONA	Icona	24'' Towel bar		H807	-	9395H807	Polished Nickel PVD	$1589
C	ACCESSORIES	ICONA	Icona	24'' Towel bar		H807	-	93P5H807	Matte Gun Metal PVD	$1589
C	ACCESSORIES	ICONA	Icona	24'' Towel bar		H807	-	93P6H807	Matte British Gold PVD	$1589
C	ACCESSORIES	ICONA	Icona	24'' Towel bar		H807	-	93P9H807	Matte Copper PVD	$1589
C	ACCESSORIES	ICONA	Icona	24'' Towel bar		H807	-	93S1H807	Deep Black PVD	$1589
C	ACCESSORIES	ICONA	Icona	24'' Towel bar		H807	-	93Q7H807	Pure Brass PVD	$1694
C	ACCESSORIES	ICONA	Icona	24'' Towel bar		H807	-	93Q8H807	Raw Metal PVD	$1694
C	ACCESSORIES	ICONA	Icona	Wall-mount hook		H808	-	9313H808	Matte Black	$506
C	ACCESSORIES	ICONA	Icona	Wall-mount hook		H808	-	9395H808	Polished Nickel PVD	$634
C	ACCESSORIES	ICONA	Icona	Wall-mount hook		H808	-	93P5H808	Matte Gun Metal PVD	$634
C	ACCESSORIES	ICONA	Icona	Wall-mount hook		H808	-	93P6H808	Matte British Gold PVD	$634
C	ACCESSORIES	ICONA	Icona	Wall-mount hook		H808	-	93P9H808	Matte Copper PVD	$634
C	ACCESSORIES	ICONA	Icona	Wall-mount hook		H808	-	93S1H808	Deep Black PVD	$634
C	ACCESSORIES	ICONA	Icona	Wall-mount hook		H808	-	93Q7H808	Pure Brass PVD	$676
C	ACCESSORIES	ICONA	Icona	Wall-mount hook		H808	-	93Q8H808	Raw Metal PVD	$676
C	ACCESSORIES	ICONA	Icona	Toilet paper holder		H845	-	9313H845	Matte Black	$664
C	ACCESSORIES	ICONA	Icona	Toilet paper holder		H845	-	9395H845	Polished Nickel PVD	$830
C	ACCESSORIES	ICONA	Icona	Toilet paper holder		H845	-	93P5H845	Matte Gun Metal PVD	$830
C	ACCESSORIES	ICONA	Icona	Toilet paper holder		H845	-	93P6H845	Matte British Gold PVD	$830
C	ACCESSORIES	ICONA	Icona	Toilet paper holder		H845	-	93P9H845	Matte Copper PVD	$830
C	ACCESSORIES	ICONA	Icona	Toilet paper holder		H845	-	93S1H845	Deep Black PVD	$830
C	ACCESSORIES	ICONA	Icona	Toilet paper holder		H845	-	93Q7H845	Pure Brass PVD	$884
C	ACCESSORIES	ICONA	Icona	Toilet paper holder		H845	-	93Q8H845	Raw Metal PVD	$884
A	ACCESSORIES	VENEZIA	Venezia	12'' Towel bar		7806	-	94027806	Chrome	$958
C	ACCESSORIES	VENEZIA	Venezia	12'' Towel bar		7806	-	94957806	Polished Nickel PVD	$1438
C	ACCESSORIES	VENEZIA	Venezia	12'' Towel bar		7806	-	94P57806	Matte Gun Metal PVD	$1438
C	ACCESSORIES	VENEZIA	Venezia	12'' Towel bar		7806	-	94P67806	Matte British Gold PVD	$1438
C	ACCESSORIES	VENEZIA	Venezia	12'' Towel bar		7806	-	94P97806	Matte Copper PVD	$1438
C	ACCESSORIES	VENEZIA	Venezia	12'' Towel bar		7806	-	94Q77806	Pure Brass PVD	$1535
C	ACCESSORIES	VENEZIA	Venezia	12'' Towel bar		7806	-	94Q87806	Raw Metal PVD	$1535
A	ACCESSORIES	VENEZIA	Venezia	18'' Towel bar		7811	-	94027811	Chrome	$1055
C	ACCESSORIES	VENEZIA	Venezia	18'' Towel bar		7811	-	94957811	Polished Nickel PVD	$1583
C	ACCESSORIES	VENEZIA	Venezia	18'' Towel bar		7811	-	94P57811	Matte Gun Metal PVD	$1583
A	ACCESSORIES	VENEZIA	Venezia	24'' Towel bar		7807	-	94027807	Chrome	$1196
C	ACCESSORIES	VENEZIA	Venezia	24'' Towel bar		7807	-	94957807	Polished Nickel PVD	$1793
C	ACCESSORIES	VENEZIA	Venezia	24'' Towel bar		7807	-	94P57807	Matte Gun Metal PVD	$1793
A	ACCESSORIES	VENEZIA	Venezia	Wall-mount hook		7808	-	94027808	Chrome	$395
C	ACCESSORIES	VENEZIA	Venezia	Wall-mount hook		7808	-	94957808	Polished Nickel PVD	$593
C	ACCESSORIES	VENEZIA	Venezia	Wall-mount hook		7808	-	94P57808	Matte Gun Metal PVD	$593
A	ACCESSORIES	VENEZIA	Venezia	Toilet paper holder		7809	-	94027809	Chrome	$1033
C	ACCESSORIES	VENEZIA	Venezia	Toilet paper holder		7809	-	94957809	Polished Nickel PVD	$1551
C	ACCESSORIES	VENEZIA	Venezia	Toilet paper holder		7809	-	94P57809	Matte Gun Metal PVD	$1551
A	ACCESSORIES	VENEZIA	Venezia	Freestanding toilet brush holder		7821	-	94027821	Chrome	$955
A	ACCESSORIES	VENEZIA	Venezia	Wall-mount toilet brush holder		7847	-	94027847	Chrome	$958
A	ACCESSORIES	YOUNG	Young	12'' Towel bar		7606	-	96027606	Chrome	$366
C	ACCESSORIES	YOUNG	Young	12'' Towel bar		7606	-	96137606	Matte Black	$439
C	ACCESSORIES	YOUNG	Young	12'' Towel bar		7606	-	96957606	Polished Nickel PVD	$547
C	ACCESSORIES	YOUNG	Young	12'' Towel bar		7606	-	96P57606	Matte Gun Metal PVD	$547
A	ACCESSORIES	YOUNG	Young	18'' Towel bar		7611	-	96027611	Chrome	$393
C	ACCESSORIES	YOUNG	Young	18'' Towel bar		7611	-	96137611	Matte Black	$471
A	ACCESSORIES	YOUNG	Young	24'' Towel bar		7607	-	96027607	Chrome	$413
C	ACCESSORIES	YOUNG	Young	24'' Towel bar		7607	-	96137607	Matte Black	$495
A	ACCESSORIES	YOUNG	Young	Wall-mount hook		7608	-	96027608	Chrome	$189
C	ACCESSORIES	YOUNG	Young	Wall-mount hook		7608	-	96137608	Matte Black	$228
C	ACCESSORIES	YOUNG	Young	Wall-mount hook		7608	-	96957608	Polished Nickel PVD	$285
C	ACCESSORIES	YOUNG	Young	Wall-mount hook		7608	-	96P57608	Matte Gun Metal PVD	$285
A	ACCESSORIES	YOUNG	Young	Toilet paper holder		7609	-	96027609	Chrome	$355
C	ACCESSORIES	YOUNG	Young	Toilet paper holder		7609	-	96137609	Matte Black	$426
C	ACCESSORIES	YOUNG	Young	Toilet paper holder		7609	-	96957609	Polished Nickel PVD	$531
A	ACCESSORIES	YOUNG	Young	Toilet brush holder		7646	-	96027646	Chrome	$593
C	ACCESSORIES	YOUNG	Young	Toilet brush holder		7646	-	96137646	Matte Black	$710
A	ACCESSORIES	LINEA	Linea	12'' Towel bar		7706	-	92027706	Chrome	$686
C	ACCESSORIES	LINEA	Linea	12'' Towel bar		7706	-	92137706	Matte Black	$824
C	ACCESSORIES	LINEA	Linea	12'' Towel bar		7706	-	92957706	Polished Nickel PVD	$1029
C	ACCESSORIES	LINEA	Linea	12'' Towel bar		7706	-	92P57706	Matte Gun Metal PVD	$1029
A	ACCESSORIES	LINEA	Linea	18'' Towel bar		7711	-	92027711	Chrome	$731
C	ACCESSORIES	LINEA	Linea	18'' Towel bar		7711	-	92137711	Matte Black	$878
A	ACCESSORIES	LINEA	Linea	24'' Towel bar		7707	-	92027707	Chrome	$771
C	ACCESSORIES	LINEA	Linea	24'' Towel bar		7707	-	92137707	Matte Black	$926
A	ACCESSORIES	LINEA	Linea	Wall-mount hook		7708	-	92027708	Chrome	$313
C	ACCESSORIES	LINEA	Linea	Wall-mount hook		7708	-	92137708	Matte Black	$375
A	ACCESSORIES	LINEA	Linea	Toilet paper holder		7709	-	92027709	Chrome	$834
C	ACCESSORIES	LINEA	Linea	Toilet paper holder		7709	-	92137709	Matte Black	$1002
A	ACCESSORIES	LINEA	Linea	Toilet brush holder		7746	-	92027746	Chrome	$845
C	ACCESSORIES	LINEA	Linea	Toilet brush holder		7746	-	92137746	Matte Black	$1012`;

    const lines = raw.trim().split('\n');
    const sku_lookup = {};
    const acc_index = {};

    lines.forEach(line => {
      const parts = line.split('\t');
      if (parts.length < 11) return;
      const family = parts[2].trim();
      const productName = parts[4].trim();
      const configCode = parts[8].trim();
      const price = parseFloat(parts[10].replace(/[$,]/g, '')) || 0;

      // Extract 2-char finish code from configCode positions 2-3
      const fc = configCode.length >= 4 ? configCode.substring(2, 4) : configCode.slice(-2);

      sku_lookup[configCode] = { af: family, fc };

      const key = `${family}|${fc}`;
      if (!acc_index[key]) acc_index[key] = [];
      acc_index[key].push({ sku: configCode, desc: productName, price });
    });

    const catalog = { sku_lookup, acc_index };
    const json = JSON.stringify(catalog, null, 2);
    setResult(json);
    setStats({
      skus: Object.keys(sku_lookup).length,
      keys: Object.keys(acc_index).length,
      families: [...new Set(Object.keys(acc_index).map(k => k.split('|')[0]))]
    });
  }, []);

  const download = () => {
    const blob = new Blob([result], { type: 'application/json' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'fantini_catalog.json';
    a.click();
  };

  return (
    <div style={{padding:'20px',fontFamily:'Arial,sans-serif',background:'#f0ede8',minHeight:'100vh'}}>
      <div style={{background:'white',borderRadius:'6px',padding:'32px',maxWidth:'500px',margin:'0 auto',boxShadow:'0 2px 12px rgba(0,0,0,0.1)'}}>
        <div style={{color:'#b5924c',fontSize:'12px',fontWeight:'bold',letterSpacing:'0.1em',marginBottom:'8px'}}>CHOWN · ADMIN TOOLS</div>
        <h2 style={{fontWeight:'normal',marginBottom:'16px'}}>Fantini Catalog Builder</h2>
        {stats && (
          <div style={{background:'#edf7f0',border:'1px solid #b8ddc5',borderRadius:'4px',padding:'16px',marginBottom:'20px',fontSize:'13px',color:'#2d5a3d',lineHeight:'1.8'}}>
            ✓ Built catalog:<br/>
            • {stats.skus} SKUs in lookup<br/>
            • {stats.keys} accessory index keys<br/>
            • Families: {stats.families.join(', ')}
          </div>
        )}
        {result && (
          <button onClick={download} style={{width:'100%',padding:'13px',background:'#1a1a1a',color:'white',border:'none',borderRadius:'4px',fontSize:'14px',fontWeight:'bold',cursor:'pointer'}}>
            ⬇ Download fantini_catalog.json
          </button>
        )}
      </div>
    </div>
  );
}

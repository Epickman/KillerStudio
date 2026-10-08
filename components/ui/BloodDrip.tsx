export function BloodDrip({ className = '' }: { className?: string }) {
  return (
    <div className={`relative w-full overflow-visible pointer-events-none ${className}`} style={{ height: 48, marginBottom: -1 }}>
      <svg
        viewBox="0 0 1440 48"
        preserveAspectRatio="none"
        className="absolute top-0 left-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Línea base */}
        <line x1="0" y1="2" x2="1440" y2="2" stroke="#e8177a" strokeWidth="1" strokeOpacity="0.4" />

        {/* Drips — posiciones y alturas variadas */}
        <path d="M80,2 Q82,18 83,28 Q84,38 82,43 Q80,46 78,43 Q76,38 77,28 Q78,18 80,2Z" fill="#e8177a" fillOpacity="0.8"/>
        <path d="M220,2 Q221,12 222,20 Q223,26 221,29 Q219,31 217,29 Q215,26 216,20 Q217,12 220,2Z" fill="#e8177a" fillOpacity="0.6"/>
        <path d="M390,2 Q393,22 394,34 Q395,44 392,47 Q389,49 386,47 Q383,44 384,34 Q385,22 390,2Z" fill="#e8177a" fillOpacity="0.9"/>
        <path d="M560,2 Q561,10 562,16 Q563,21 561,23 Q559,25 557,23 Q555,21 556,16 Q557,10 560,2Z" fill="#e8177a" fillOpacity="0.5"/>
        <path d="M720,2 Q723,20 724,32 Q725,40 722,44 Q719,46 716,44 Q713,40 714,32 Q715,20 720,2Z" fill="#e8177a" fillOpacity="0.85"/>
        <path d="M880,2 Q882,14 883,22 Q884,29 882,32 Q880,34 878,32 Q876,29 877,22 Q878,14 880,2Z" fill="#e8177a" fillOpacity="0.65"/>
        <path d="M1050,2 Q1052,18 1053,28 Q1054,36 1052,40 Q1050,42 1048,40 Q1046,36 1047,28 Q1048,18 1050,2Z" fill="#e8177a" fillOpacity="0.75"/>
        <path d="M1200,2 Q1201,8 1202,13 Q1203,18 1201,20 Q1199,22 1197,20 Q1195,18 1196,13 Q1197,8 1200,2Z" fill="#e8177a" fillOpacity="0.55"/>
        <path d="M1360,2 Q1363,16 1364,26 Q1365,34 1362,38 Q1359,40 1356,38 Q1353,34 1354,26 Q1355,16 1360,2Z" fill="#e8177a" fillOpacity="0.8"/>
      </svg>
    </div>
  )
}

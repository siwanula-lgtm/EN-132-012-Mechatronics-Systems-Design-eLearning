export interface ModuleData {
  id: string;
  week: string;
  titleTh: string;
  titleEn: string;
  description: string;
  clo: string;
  hoursT: number;
  hoursP: number;
  topics: string[];
  labTitle: string;
  labCount: number;
  reviewSheet: string;
  icon: string;
  color: string;
}

// 9 หน่วยเรียน ตามเอกสารประกอบการสอน EN-132-012 ฉบับจัดรูปเล่มตามแม่แบบ (สัปดาห์ ชั่วโมง ท/ป CLO หัวข้อ)
export const modules: ModuleData[] = [
  {
    id: "01",
    week: "1",
    titleTh: "บทนำเกี่ยวกับระบบเมคคาทรอนิกส์",
    titleEn: "Introduction to Mechatronic Systems",
    description:
      "เมคคาทรอนิกส์ (Mechatronics) คือการบูรณาการอย่างมีพลังร่วมกันของวิศวกรรมเครื่องกล อิเล็กทรอนิกส์/ไฟฟ้า คอมพิวเตอร์ และการควบคุม เพื่อออกแบบผลิตภัณฑ์และกระบวนการที่ชาญฉลาด คำนี้เกิดจากการรวม Mecha (Mechanism) เข้ากับ tronics …",
    clo: "CLO1, CLO4",
    hoursT: 2,
    hoursP: 3,
    topics: ["1.1 ความหมายและนิยามของระบบเมคคาทรอนิกส์", "1.2 ประวัติของระบบเมคคาทรอนิกส์", "1.3 องค์ประกอบของระบบเมคคาทรอนิกส์", "1.4 การพัฒนาของระบบเมคคาทรอนิกส์", "1.5 การจัดประเภทของระบบเมคคาทรอนิกส์", "1.6 แนวโน้มของระบบเมคคาทรอนิกส์ในอนาคต", "1.7 ตัวควบคุมในระบบเมคคาทรอนิกส์: PLC เบื้องต้น", "1.8 ระบบตั้งชื่อรุ่นและการกำหนดหมายเลขอินพุต/เอาต์พุตของ PLC FX5U"],
    labTitle: "โครงสร้าง PLC Mitsubishi FX5U และการทดลอง",
    labCount: 1,
    reviewSheet: "review_sheet_01.html",
    icon: "Cpu",
    color: "slate",
  },
  {
    id: "02",
    week: "2–3",
    titleTh: "กลไกและระบบส่งกำลัง",
    titleEn: "Mechanisms and Power Transmission Systems",
    description:
      "กลไกและระบบส่งกำลังทำหน้าที่ถ่ายทอดกำลังและการเคลื่อนที่จากต้นกำลัง เช่น มอเตอร์ ไปยังภาระ โดยปรับความเร็ว แรงบิด ทิศทาง และรูปแบบการเคลื่อนที่ให้เหมาะสมกับงาน องค์ประกอบสำคัญได้แก่ เกียร์ สายพานและโซ่ แคมและตัวตาม เพลา ข้อต่อ …",
    clo: "CLO1, CLO2, CLO4",
    hoursT: 4,
    hoursP: 6,
    topics: ["2.1 หลักการพื้นฐานการเคลื่อนที่ของกลไก", "2.2 เกียร์ (Gear)", "2.3 สายพานและโซ่ (Belt and Chain)", "2.4 แคมและตัวตาม (Cam and Follower)", "2.5 เพลา ข้อต่อ และตลับลูกปืน (Shaft, Coupling and Bearing)", "2.6 ลีดสกรูและบอลสกรู (Lead Screw and Ball Screw)", "2.7 การเลือกชุดส่งกำลังและการควบคุมมอเตอร์ด้วย PLC"],
    labTitle: "การควบคุมมอเตอร์ DC และสเต็ปปิ้งมอเตอร์ด้วย PLC FX5U",
    labCount: 1,
    reviewSheet: "review_sheet_02.html",
    icon: "Cog",
    color: "blue",
  },
  {
    id: "03",
    week: "4–5",
    titleTh: "การออกแบบกลไกในระบบเมคคาทรอนิกส์",
    titleEn: "Mechanism Design in Mechatronic Systems",
    description:
      "ระบบเมคคาทรอนิกส์เป็นการรวมงานกลไก อิเล็กทรอนิกส์ และการควบคุมเข้าด้วยกัน จึงต้องใช้ระเบียบวิธีออกแบบที่เป็นระบบ เช่น V-model ตามแนว VDI 2206 และใช้เครื่องมือ CAx ช่วยสร้างแบบจำลอง 3 มิติ วิเคราะห์ และผลิตต้นแบบ SolidWorks …",
    clo: "CLO2, CLO4",
    hoursT: 4,
    hoursP: 6,
    topics: ["3.1 กระบวนการออกแบบระบบเมคคาทรอนิกส์และสภาพแวดล้อม CAx", "3.2 พื้นฐานการใช้ SolidWorks", "3.3 Features สร้างและปรับแต่งชิ้นงาน", "3.4 การประกอบ การตรวจสอบ และการทำงานร่วมกันระหว่าง MCAD/ECAD", "3.5 เครื่องพิมพ์ 3 มิติแบบ FDM", "3.6 การออกแบบเพื่อการพิมพ์ และการคำนวณเบื้องต้น"],
    labTitle: "การออกแบบขาตั้งมอเตอร์ NEMA 17 ด้วย SolidWorks",
    labCount: 1,
    reviewSheet: "review_sheet_03.html",
    icon: "Box",
    color: "green",
  },
  {
    id: "04",
    week: "6",
    titleTh: "ระบบเซ็นเซอร์ในระบบเมคคาทรอนิกส์",
    titleEn: "Sensor Systems in Mechatronic Systems",
    description:
      "เซนเซอร์เป็นอุปกรณ์รับรู้ข้อมูลของระบบเมคคาทรอนิกส์ โดยแปลงปริมาณทางกายภาพ เช่น มุม ความเร็ว ตำแหน่ง และการมีอยู่ของวัตถุ เป็นสัญญาณไฟฟ้าส่งให้ตัวควบคุม เอนโค้ดเดอร์วัดการหมุนและตำแหน่งในรูปพัลส์หรือรหัสดิจิทัล …",
    clo: "CLO1, CLO3, CLO4",
    hoursT: 2,
    hoursP: 3,
    topics: ["4.1 พื้นฐานเซนเซอร์และคุณลักษณะสถิต", "4.2 เอนโค้ดเดอร์ (Encoder)", "4.3 พร็อกซิมิตีเซนเซอร์ (Proximity Sensor)", "4.4 โฟโตอิเล็กทริกเซนเซอร์ (Photoelectric Sensor)", "4.5 เซนเซอร์ใยแก้วนำแสง (Fiber-optic Sensor)", "4.6 การเลือกเซนเซอร์"],
    labTitle: "การตรวจจับวัตถุด้วยพร็อกซิมิตีและโฟโตอิเล็กทริก",
    labCount: 1,
    reviewSheet: "review_sheet_04.html",
    icon: "Radar",
    color: "yellow",
  },
  {
    id: "05",
    week: "7, 9",
    titleTh: "ระบบต้นกำลังในระบบเมคคาทรอนิกส์",
    titleEn: "Actuation Systems in Mechatronic Systems",
    description:
      "แอคชูเอเตอร์เป็นส่วนเอาต์พุตของระบบเมคคาทรอนิกส์ ทำหน้าที่เปลี่ยนสัญญาณควบคุมให้เป็นการเคลื่อนที่หรือแรง ชนิดที่ใช้บ่อย ได้แก่ มอเตอร์ไฟฟ้า (DC, AC, สเต็ปปิง, เซอร์โว) กระบอกลมและลิเนียร์แอคชูเอเตอร์ …",
    clo: "CLO1, CLO2, CLO4",
    hoursT: 4,
    hoursP: 6,
    topics: ["5.1 ภาพรวมของแอคชูเอเตอร์", "5.2 มอเตอร์ไฟฟ้ากระแสตรง (DC Motor)", "5.3 มอเตอร์ไฟฟ้ากระแสสลับและอินเวอร์เตอร์", "5.4 สเต็ปปิงมอเตอร์และเซอร์โวมอเตอร์", "5.5 กระบอกลมและระบบนิวแมติกส์", "5.6 ลิเนียร์แอคชูเอเตอร์และกลไกเคลื่อนที่เชิงเส้น"],
    labTitle: "การควบคุมมอเตอร์ AC ด้วยอินเวอร์เตอร์ กระบอกลมด้วย",
    labCount: 1,
    reviewSheet: "review_sheet_05.html",
    icon: "Zap",
    color: "red",
  },
  {
    id: "06",
    week: "10–12",
    titleTh: "การเขียนโปรแกรมควบคุม",
    titleEn: "Control Programming",
    description:
      "การเขียนโปรแกรมควบคุมคือการกำหนดขั้นตอนให้ตัวควบคุมอ่านค่าจากเซนเซอร์ ตัดสินใจ และสั่งแอคชูเอเตอร์ ภาษาที่ใช้ขึ้นกับแพลตฟอร์ม Python เหมาะกับพีซีสำหรับเก็บข้อมูลและทดสอบอัลกอริทึม Arduino C++ …",
    clo: "CLO2, CLO4",
    hoursT: 6,
    hoursP: 9,
    topics: ["6.1 ภาพรวมการเขียนโปรแกรมควบคุม", "6.2 Python สำหรับงานควบคุม", "6.3 Arduino (ESP32)", "6.4 Visual Basic", "6.5 อัลกอริทึมควบคุมเบื้องต้น", "6.6 PLC และภาษาแลดเดอร์"],
    labTitle: "การเขียนโปรแกรมควบคุมด้วย ESP32 (Arduino),",
    labCount: 1,
    reviewSheet: "review_sheet_06.html",
    icon: "Code",
    color: "purple",
  },
  {
    id: "07",
    week: "13",
    titleTh: "การเชื่อมโยงและสื่อสารระหว่างอุปกรณ์",
    titleEn: "Device Connectivity and Communication",
    description:
      "ระบบเมคคาทรอนิกส์ประกอบด้วยตัวควบคุม เซนเซอร์ แอคชูเอเตอร์ และคอมพิวเตอร์หลายตัวที่ต้องแลกเปลี่ยนข้อมูลกัน การสื่อสารแบบอนุกรมส่งข้อมูลทีละบิตบนสายจำนวนน้อย ซึ่งมีหลายมาตรฐาน เช่น RS-232 (จุดต่อจุด ระยะสั้น) RS-485 …",
    clo: "CLO1, CLO3, CLO4",
    hoursT: 2,
    hoursP: 3,
    topics: ["7.1 พื้นฐานการสื่อสารข้อมูล", "7.2 USB และ USB Type-C", "7.3 RS-232", "7.4 RS-485", "7.5 โปรโตคอล Modbus RTU", "7.6 Modbus TCP และการเลือกอินเทอร์เฟซ"],
    labTitle: "การสื่อสาร Modbus RTU ระหว่างพีซี ESP32 และ PLC",
    labCount: 1,
    reviewSheet: "review_sheet_07.html",
    icon: "Cable",
    color: "teal",
  },
  {
    id: "08",
    week: "14–15",
    titleTh: "ระบบอัตโนมัติในงานอุตสาหกรรม",
    titleEn: "Industrial Automation Systems",
    description:
      "ระบบอัตโนมัติในงานอุตสาหกรรมใช้เซนเซอร์ ตัวควบคุม (PLC หรือไมโครคอนโทรลเลอร์) และตัวขับ เพื่อให้กระบวนการทำงานตามลำดับโดยอาศัยสัญญาณป้อนกลับ ผู้ออกแบบต้องคำนึงถึงความปลอดภัยเป็นอันดับแรก เช่น ปุ่มหยุดฉุกเฉินแบบ NC และอินเตอร์ล็อก …",
    clo: "CLO2, CLO3, CLO4",
    hoursT: 4,
    hoursP: 6,
    topics: ["8.1 ภาพรวมระบบอัตโนมัติในงานอุตสาหกรรม", "8.2 องค์ประกอบของระบบอัตโนมัติ", "8.3 การควบคุมเชิงลำดับ ความปลอดภัย และเครื่องสถานะ", "8.4 สายพานลำเลียงควบคุมด้วย ESP32 (Arduino)", "8.5 สายพานลำเลียงควบคุมด้วย PLC FX5U", "8.6 ตัวชี้วัดประสิทธิภาพและ OEE", "8.7 Industry 4.0 และ IIoT กับสายพานลำเลียง"],
    labTitle: "การควบคุมสายพานลำเลียงด้วย ESP32 และ PLC FX5U",
    labCount: 1,
    reviewSheet: "review_sheet_08.html",
    icon: "Factory",
    color: "indigo",
  },
  {
    id: "09",
    week: "16",
    titleTh: "ระบบสายพานลำเลียงที่ใช้ในงานอุตสาหกรรม",
    titleEn: "Industrial Conveyor Systems",
    description:
      "สายพานลำเลียงเป็นระบบขนย้ายชิ้นงานที่ใช้กันแพร่หลายในสายการผลิต มีหลายชนิดตามลักษณะงาน เช่น แบบสายพาน ลูกกลิ้ง โซ่ และสกรู การเลือกและออกแบบต้องคำนวณแรงดึง กำลังมอเตอร์ ความเร็ว และอัตราการผ่านของชิ้นงาน …",
    clo: "CLO2, CLO3, CLO4",
    hoursT: 2,
    hoursP: 3,
    topics: ["9.1 ชนิดและส่วนประกอบของสายพานลำเลียง", "9.2 การคำนวณแรงดึง กำลัง ความเร็ว และอัตราการผ่าน", "9.3 ชุดขับของสายพาน", "9.4 เซนเซอร์บนสายพานและการจำแนกชิ้นงาน", "9.5 การควบคุมสายพานคัดแยกด้วย PLC FX5U", "9.6 ความปลอดภัยและการบำรุงรักษา"],
    labTitle: "การควบคุมสายพานลำเลียงและการคัดแยกชิ้นงานด้วย PLC",
    labCount: 1,
    reviewSheet: "review_sheet_09.html",
    icon: "Container",
    color: "orange",
  },
];

export function getModuleById(id: string): ModuleData | undefined {
  return modules.find((m) => m.id === id);
}

export const colorMap: Record<string, { bg: string; text: string; border: string; accent: string }> = {
  slate: { bg: "bg-slate-100 dark:bg-slate-800/40", text: "text-slate-700 dark:text-slate-300", border: "border-slate-200 dark:border-slate-700", accent: "from-slate-500 to-gray-500" },
  blue: { bg: "bg-blue-50 dark:bg-blue-900/20", text: "text-blue-700 dark:text-blue-300", border: "border-blue-200 dark:border-blue-800", accent: "from-blue-500 to-cyan-500" },
  green: { bg: "bg-green-50 dark:bg-green-900/20", text: "text-green-700 dark:text-green-300", border: "border-green-200 dark:border-green-800", accent: "from-green-500 to-emerald-500" },
  yellow: { bg: "bg-yellow-50 dark:bg-yellow-900/20", text: "text-yellow-700 dark:text-yellow-300", border: "border-yellow-200 dark:border-yellow-800", accent: "from-yellow-500 to-orange-500" },
  red: { bg: "bg-red-50 dark:bg-red-900/20", text: "text-red-700 dark:text-red-300", border: "border-red-200 dark:border-red-800", accent: "from-red-500 to-pink-500" },
  purple: { bg: "bg-purple-50 dark:bg-purple-900/20", text: "text-purple-700 dark:text-purple-300", border: "border-purple-200 dark:border-purple-800", accent: "from-purple-500 to-violet-500" },
  teal: { bg: "bg-teal-50 dark:bg-teal-900/20", text: "text-teal-700 dark:text-teal-300", border: "border-teal-200 dark:border-teal-800", accent: "from-teal-500 to-cyan-500" },
  indigo: { bg: "bg-indigo-50 dark:bg-indigo-900/20", text: "text-indigo-700 dark:text-indigo-300", border: "border-indigo-200 dark:border-indigo-800", accent: "from-indigo-500 to-blue-500" },
  orange: { bg: "bg-orange-50 dark:bg-orange-900/20", text: "text-orange-700 dark:text-orange-300", border: "border-orange-200 dark:border-orange-800", accent: "from-orange-500 to-amber-500" },
  rose: { bg: "bg-rose-50 dark:bg-rose-900/20", text: "text-rose-700 dark:text-rose-300", border: "border-rose-200 dark:border-rose-800", accent: "from-rose-500 to-pink-500" },
};

## จุดประสงค์การสอน

- **6.1 เข้าใจภาพรวมการเขียนโปรแกรมควบคุมได้**
    - 6.1.1 บอกภาษาที่ใช้ในการเขียนโปรแกรมควบคุมได้
    - 6.1.2 เปรียบเทียบภาษา Python, Arduino C++, Visual Basic และแลดเดอร์ได้
- **6.2 นำความรู้การเขียนโปรแกรม Python สำหรับงานควบคุมไปใช้ได้**
    - 6.2.1 อธิบายโครงสร้างควบคุมพื้นฐานของ Python ได้
    - 6.2.2 อธิบายการสื่อสารระหว่างพีซีกับ ESP32 ผ่านพอร์ตอนุกรมได้
- **6.3 นำความรู้การเขียนโปรแกรม Arduino (ESP32) ไปใช้ได้**
    - 6.3.1 อธิบายโครงสร้างสเก็ตช์ Arduino ได้
    - 6.3.2 คำนวณแรงดันเฉลี่ยของสัญญาณ PWM และแรงดันจากค่า ADC ได้
- **6.4 เข้าใจการเขียนโปรแกรมแบบเหตุการณ์ด้วย Visual Basic ได้**
    - 6.4.1 บอกส่วนประกอบของฟอร์มและคอนโทรลใน Visual Basic ได้
    - 6.4.2 อธิบายการเขียนโปรแกรมแบบเหตุการณ์ได้
- **6.5 เข้าใจอัลกอริทึมควบคุมเบื้องต้นได้**
    - 6.5.1 อธิบายการควบคุมแบบ ON/OFF, P และ PI ได้
    - 6.5.2 เปรียบเทียบผลการควบคุมแต่ละแบบจากผลจำลองได้
- **6.6 นำความรู้ PLC และภาษาแลดเดอร์ไปใช้ได้**
    - 6.6.1 อธิบายรอบสแกนและสัญลักษณ์แลดเดอร์พื้นฐานได้
    - 6.6.2 คำนวณค่าตั้งของไทเมอร์และอธิบายการทำงานของเคาน์เตอร์ได้
- **6.7 ปฏิบัติการเขียนโปรแกรม Python จำลองการควบคุมแบบ ON/OFF, P และ PI ได้ถูกต้อง**
    - 6.7.1 สังเกตผลการรันสคริปต์จำลองการควบคุมด้วย Python ได้ถูกต้อง
    - 6.7.2 ดำเนินการปรับค่า Kp และ Ki และเปรียบเทียบผลได้ถูกต้อง
- **6.8 ปฏิบัติการเขียนโปรแกรม ESP32 (Arduino) และสั่งงานผ่านพอร์ตอนุกรมด้วย Python**
- **และ Visual Basic ได้ถูกต้องและปลอดภัย**
    - 6.8.1 สังเกตการต่อวงจรและการเขียนโปรแกรม ESP32 ด้วย Arduino IDE ได้ถูกต้อง
    - 6.8.2 ดำเนินการสั่งงาน ESP32 ด้วย Python ได้ถูกต้อง
    - 6.8.3 ดำเนินการสร้างฟอร์ม Visual Basic ควบคุม ESP32 ได้ถูกต้อง
- **6.9 ปฏิบัติการเขียนโปรแกรมแลดเดอร์ Input-Output ซีลอิน ไทเมอร์ และเคาน์เตอร์บน PLC**
- **FX5UJ ได้ถูกต้องและปลอดภัย**
    - 6.9.1 สังเกตการทำงานของแลดเดอร์ Input-Output และวงจรซีลอินได้ถูกต้อง
    - 6.9.2 ดำเนินการเขียนโปรแกรมไทเมอร์ร่วมกับวงจรซีลอินได้ถูกต้อง
    - 6.9.3 ดำเนินการเขียนโปรแกรมเคาน์เตอร์และทดสอบการรีเซ็ตได้ถูกต้อง

## 6.1 ภาพรวมการเขียนโปรแกรมควบคุม

โปรแกรมควบคุมทำหน้าที่เป็นสมองของระบบเมคคาทรอนิกส์ โดยอ่านสัญญาณจากเซนเซอร์ (หน่วยที่
4) ประมวลผลตามตรรกะหรืออัลกอริทึม แล้วสั่งแอคชูเอเตอร์ (หน่วยที่ 5)
การเลือกภาษาและตัวควบคุมขึ้นกับงาน ความต้องการด้านเวลาตอบสนอง และสภาพแวดล้อมใช้งาน
(Shetty & Kolk, 2011) หน่วยนี้ศึกษาสี่แนวทาง ได้แก่ Python, Arduino (ESP32),
Visual Basic และ PLC

![ภาพที่ 6.1 ภาพรวมการเขียนโปรแกรมควบคุมและภาษาที่ใช้](/images/book/image105.png)

ที่มา: ผู้จัดทำ (ภาพประกอบต้นฉบับ)

![ภาพที่ 6.2 เปรียบเทียบ Python, Arduino C++, Visual Basic และแลดเดอร์](/images/book/image106.png)

ที่มา: ผู้จัดทำ (ภาพประกอบต้นฉบับ)

### ตารางที่ 6.1 แนวทางเลือกภาษาตามงาน

| **งาน**                       | **ตัวเลือกที่เหมาะสม** | **เหตุผล**                               |
|-------------------------------|--------------------|-----------------------------------------|
| บันทึกข้อมูลและวิเคราะห์ผล          | Python             | ไลบรารีมาก ทำกราฟและไฟล์ CSV ง่าย          |
| อ่านเซนเซอร์และสั่ง PWM ระดับอุปกรณ์ | Arduino/ESP32      | ควบคุมขา ADC และ PWM โดยตรง ราคาประหยัด   |
| หน้าจอสั่งงานบน Windows          | Visual Basic       | ออกแบบฟอร์มลากวางและเขียนโค้ดตามเหตุการณ์    |
| ควบคุมเครื่องจักรในโรงงาน         | PLC (แลดเดอร์)      | ทนทาน รอบสแกนแน่นอน I/O มาตรฐานอุตสาหกรรม |

โปรแกรมของตัวควบคุมทำงานเป็นวงรอบ Arduino ใช้ setup หนึ่งครั้งแล้ววน loop ส่วน PLC
ทำงานเป็นรอบสแกนคือรีเฟรชอินพุต ประมวลผลโปรแกรม และรีเฟรชเอาต์พุต (Mitsubishi
Electric, 2023)

![ภาพที่ 6.3 โครงสร้างโปรแกรม Arduino เทียบรอบสแกน PLC](/images/book/image107.png)

ที่มา: ผู้จัดทำ (ภาพประกอบต้นฉบับ อ้างอิงแนวคิดจาก Mitsubishi Electric, 2023)

## 6.2 Python สำหรับงานควบคุม

Python เป็นภาษาแบบตีความ (Interpreted) อ่านง่าย ใช้ย่อหน้าแทนวงเล็บปีกกา ไลบรารี
pyserial ใช้สื่อสารกับไมโครคอนโทรลเลอร์ผ่านพอร์ตอนุกรม ตัวอย่างโครงงาน ESP32 Smart
Rice Dryer ใช้ Python สั่งงานและเก็บข้อมูลจากพีซี (โครงงาน ESP32 Smart Rice
Dryer, ม.ป.ป.) การสื่อสารระหว่างพีซีกับ ESP32 ในหน่วยนี้ใช้ข้อความหนึ่งคำสั่งต่อหนึ่งบรรทัด
(ลงท้ายด้วย LF) เช่น L1, L0, P128, R และ B ตัวควบคุมตอบกลับเป็นข้อความ เช่น OK
หรือ ADC=2048 โปรโตคอลแบบข้อความทดสอบได้ง่ายด้วยโปรแกรมใดก็ได้ที่ส่งข้อความได้

![ภาพที่ 6.4 สถาปัตยกรรมพีซี–ESP32 ผ่านพอร์ตอนุกรม](/images/book/image108.png)

ที่มา: ผู้จัดทำ (ภาพประกอบต้นฉบับ)

โครงสร้างหลักของ Python คือการตัดสินใจ (if/elif/else) การวนซ้ำ (for/while)
และฟังก์ชัน (def) ดังภาพที่ 6.5

![ภาพที่ 6.5 โครงสร้างควบคุมพื้นฐานของ Python](/images/book/image109.png)

ที่มา: ผู้จัดทำ (ภาพประกอบต้นฉบับ)

**ตัวอย่างที่ 6.1 การสื่อสารอนุกรม 115,200 baud แบบ 8N1 ส่ง 1 ไบต์ใช้เวลาเท่าใด และส่งสูงสุดได้กี่ไบต์ต่อวินาที**

วิธีทำ: 1 ไบต์ = 1 Start + 8 ข้อมูล + 1 Stop = 10 บิต เวลา 1 บิต = 1/115,200 ≈
8.68 µs เวลา 1 ไบต์ = 10 × 8.68 µs ≈ 86.8 µs จำนวนไบต์ต่อวินาที = 115,200/10
= 11,520 ไบต์/วินาที

![ภาพที่ 6.6 เฟรมอนุกรม UART 8N1 ของอักขระ A (0x41)](/images/book/image110.png)

ที่มา: ผู้จัดทำ (ภาพประกอบต้นฉบับ)

## 6.3 Arduino (ESP32)

สเก็ตช์ Arduino ประกอบด้วย setup ทำงานครั้งเดียว และ loop ทำงานซ้ำตลอด
ฟังก์ชันที่ใช้บ่อยคือ pinMode, digitalRead, digitalWrite, analogRead และ
Serial.begin/println ปุ่มกดที่ต่อลง GND ใช้โหมด INPUT_PULLUP ทำให้ขณะกดอ่านได้
LOW (Espressif Systems, n.d.; ต้นแบบ ESP32 Smart Rice Dryer, ม.ป.ป.)

![ภาพที่ 6.7 โครงสร้างสเก็ตช์ Arduino](/images/book/image111.png)

ที่มา: ผู้จัดทำ (ภาพประกอบต้นฉบับ อ้างอิงแนวคิดจาก Espressif Systems, n.d.)

PWM (Pulse Width Modulation) สลับเปิด-ปิดสัญญาณที่ความถี่สูง แรงดันเฉลี่ยแปรผันตามดิวตี้
Vavg = ดิวตี้ × Vsupply ใช้ปรับความสว่าง LED หรือความเร็วมอเตอร์ ESP32 ใช้ช่อง LEDC
ความละเอียด 8 บิต (ดิวตี้ 0–255)

![ภาพที่ 6.8 สัญญาณ PWM และแรงดันเฉลี่ย](/images/book/image112.png)

ที่มา: ผู้จัดทำ (ภาพประกอบต้นฉบับ)

**ตัวอย่างที่ 6.2 ESP32 (3.3 V) ใช้ PWM 8 บิต สั่งดิวตี้ 191 จงหาแรงดันเฉลี่ย และค่าที่ต้องสั่งสำหรับ 30%**

วิธีทำ: ดิวตี้ = 191/255 ≈ 0.749 → Vavg ≈ 0.749 × 3.3 ≈ 2.47 V สำหรับ 30%: ค่า
= 0.30 × 255 = 76.5 ≈ 77 (Vavg ≈ 0.30 × 3.3 ≈ 1.0 V)

### ตัวอย่างที่ 6.3 ESP32 อ่าน ADC 12 บิต (0–4095) อ้างอิง 3.3 V ได้ 3,000 จงหาแรงดันที่ขา

วิธีทำ: V = ADC × 3.3/4095 = 3,000 × 3.3/4,095 ≈ 2.42 V (การใช้ ADC ของ
ESP32 ไม่เป็นเชิงเส้นสมบูรณ์ที่ปลายช่วง ค่าที่ได้เป็นค่าประมาณ)

**ตัวอย่างที่ 6.4 เขียนนิพจน์ Python แปลงค่า ADC (0–4095) เป็นดิวตี้ PWM (0–255) และคำนวณเมื่อ ADC = 2048**

วิธีทำ: duty = adc \* 255 // 4095 ใช้การหารจำนวนเต็ม เมื่อ adc = 2048 ได้ 2048
× 255 = 522,240 หาร 4,095 ได้ 127 (ประมาณ 50%)

## 6.4 Visual Basic

Visual Basic (VB.NET) ใน Windows Forms
เป็นการเขียนโปรแกรมแบบขับเคลื่อนด้วยเหตุการณ์ (Event-driven) ผู้ออกแบบวางคอนโทรล
เช่น Button, TrackBar, Label และ Timer บนฟอร์ม
แล้วเขียนโค้ดในโพรซีเจอร์ที่ตอบสนองต่อเหตุการณ์ เช่น Click, Scroll, Tick คลาส
SerialPort ใน System.IO.Ports ใช้เปิดพอร์ต ส่ง และรับข้อมูลอนุกรม เหตุการณ์
DataReceived ทำงานบนเธรดอื่น จึงต้องใช้ BeginInvoke เมื่อจะแก้ค่าบนหน้าจอ
(Microsoft, n.d.)

![ภาพที่ 6.9 การเขียนโปรแกรมแบบเหตุการณ์ใน Visual Basic](/images/book/image113.png)

ที่มา: ผู้จัดทำ (ภาพประกอบต้นฉบับ อ้างอิงแนวคิดจาก Microsoft, n.d.)

## 6.5 อัลกอริทึมควบคุมเบื้องต้น

การควบคุมแบบ ON/OFF เปิดเมื่อต่ำกว่าเกณฑ์และปิดเมื่อสูงกว่าเกณฑ์
โดยมีช่วงฮิสเทอรีซิสป้องกันการสวิตช์ถี่ จึงเกิดการแกว่งรอบเซ็ตพอยต์ การควบคุมแบบสัดส่วน (P)
ให้สัญญาณควบคุมเป็นสัดส่วนกับค่าผิดพลาด u = Kp·e จึงเกิดค่าคลาดเคลื่อนสถานะคงตัว
(Offset) การเพิ่มอินทิกรัล (PI) สะสมค่าผิดพลาดจนเป็นศูนย์ ต้องมีการป้องกัน Windup
(ต้นแบบ ESP32 Smart Rice Dryer, ม.ป.ป.) ภาพที่ 6.10 เป็นผลจำลองฮีตเตอร์อันดับหนึ่ง
(τ = 60 s, เซ็ตพอยต์ 45 °C) ที่ได้จากสคริปต์ pid_sim.py ในใบงาน

![ภาพที่ 6.10 เปรียบเทียบการควบคุม ON/OFF และ P (ผลจำลองด้วย Python)](/images/book/image114.png)

ที่มา: ผู้จัดทำ (ภาพประกอบต้นฉบับ จากแบบจำลองอันดับหนึ่ง)

**ตัวอย่างที่ 6.5 จากแบบจำลองฮีตเตอร์ T(∞) = 25 + 60·u และ u = Kp(45 − T) เมื่อ Kp = 0.15 จงหาอุณหภูมิคงตัวและค่า Offset**

วิธีทำ: T = 25 + 60 × 0.15 × (45 − T) = 25 + 9(45 − T) → T = 25 + 405 − 9T
→ 10T = 430 → T = 43 °C Offset = 45 − 43 = 2 °C ตรงกับผลจำลอง
แก้ได้ด้วยการเพิ่มอินทิกรัล (PI) ซึ่งทำให้นิ่งที่ 45.00 °C

### ตารางที่ 6.2 เปรียบเทียบอัลกอริทึมควบคุมจากผลจำลองด้วย pid_sim.py

| **วิธี** | **ข้อดี**    | **ข้อจำกัด**             | **ผลจำลอง**            |
|--------|------------|------------------------|------------------------|
| ON/OFF | ง่าย ราคาต่ำ | แกว่งรอบเซ็ตพอยต์ สวิตช์บ่อย | ประมาณ 43.8–46.2 °C    |
| P      | นิ่ง ไม่แกว่ง  | เหลือ Offset            | 43.00 °C (Offset 2 °C) |
| PI     | ไม่มี Offset | ต้องจูนและกัน Windup      | 45.00 °C               |

## 6.6 PLC และภาษาแลดเดอร์

PLC ทำงานเป็นรอบสแกน โดยคัดลอกสถานะอินพุตเก็บไว้
ประมวลผลโปรแกรมแลดเดอร์จากบนลงล่าง แล้วเขียนผลไปยังเอาต์พุต
อินพุตจึงคงที่ตลอดการประมวลผลหนึ่งรอบ (Mitsubishi Electric, 2023)

![ภาพที่ 6.11 รอบสแกนของ PLC](/images/book/image115.png)

ที่มา: ผู้จัดทำ (ภาพประกอบต้นฉบับ อ้างอิงแนวคิดจาก Mitsubishi Electric, 2023)

แลดเดอร์ใช้สัญลักษณ์คล้ายวงจรรีเลย์ หน้าสัมผัส NO ต่อวงจรเมื่ออุปกรณ์เป็น ON หน้าสัมผัส NC
ต่อวงจรเมื่อเป็น OFF คอยล์ (OUT) สั่งเอาต์พุตหรือรีเลย์ภายใน คำสั่ง SET/RST
ล็อกและล้างอุปกรณ์ ไทเมอร์และเคาน์เตอร์มีค่า K เป็นค่าตั้ง

![ภาพที่ 6.12 สัญลักษณ์แลดเดอร์พื้นฐาน](/images/book/image116.png)

ที่มา: ผู้จัดทำ (ภาพประกอบต้นฉบับ)

วงจรซีลอิน (Self-holding) ใช้หน้าสัมผัสของเอาต์พุตต่อขนานกับปุ่ม Start
เพื่อให้เอาต์พุตค้างอยู่หลังปล่อยปุ่ม โดยมีปุ่ม Stop แบบ NC ต่ออนุกรมเพื่อตัดวงจร สมการ Y1 =
(X3 OR Y1) AND NOT X4

![ภาพที่ 6.13 วงจรซีลอินและแผนภาพเวลา](/images/book/image117.png)

ที่มา: ผู้จัดทำ (ภาพประกอบต้นฉบับ)

**ตัวอย่างที่ 6.6 ไทเมอร์ FX5UJ หน่วย 100 ms ต้องหน่วง 5 วินาทีและ 12 วินาที ต้องตั้ง K เท่าใด**

วิธีทำ: K = เวลา ÷ 0.1 s ดังนั้น 5 s → K50 และ 12 s → K120 (ถ้า K = 15 จะได้
1.5 s)

![ภาพที่ 6.14 แผนภาพเวลาของไทเมอร์และเคาน์เตอร์](/images/book/image118.png)

ที่มา: ผู้จัดทำ (ภาพประกอบต้นฉบับ)

**ตัวอย่างที่ 6.7 วงจร Y1 = (X3 OR Y1) AND NOT X4 จงวิเคราะห์สถานะของ Y1 เมื่อกด X3 สั้นๆ แล้วกด X4**

วิธีทำ: ก่อนกด X3 = 0, Y1 = 0 ได้ Y1 = 0 ขณะกด X3 = 1 → Y1 = 1 หลังปล่อย X3 =
0 แต่ Y1 = 1 จึง (0 OR 1) AND NOT 0 = 1 คง ON เมื่อกด X4 = 1 → NOT X4 = 0 ได้
Y1 = 0 และเมื่อปล่อย X4 Y1 ยังเป็น 0 เพราะ X3 และ Y1 เป็น 0

### ตัวอย่างที่ 6.8 เคาน์เตอร์ C0 K10 นับการกด X3 ต้องมีเงื่อนไขใดเพื่อให้ Y1 ติดและล้างค่า

วิธีทำ: X3 เป็นอินพุตนับของ C0 (ขอบขาขึ้น) เมื่อนับครบ 10 ครั้ง หน้าสัมผัส C0 เป็น ON สั่ง
Y1 ติดค้าง การกด X4 สั่ง RST C0 ล้างค่านับและทำให้ Y1 ดับ

## 6.7 การเขียนโปรแกรม Python จำลองการควบคุมแบบ ON/OFF, P และ PI

หัวข้อนี้เป็นการฝึกปฏิบัติตามใบงานปฏิบัติหน่วยเรียนที่ 6.1 เรื่องการเขียนโปรแกรม Python
จำลองการควบคุมแบบ ON/OFF, P และ PI ใช้เวลา 3 ชั่วโมง (180 นาที)
ผู้เรียนนำความรู้จากหัวข้อที่ผ่านมามาปฏิบัติงานจริง และบันทึกผลลงในแบบบันทึกผลการปฏิบัติงาน
โดยมีลำดับขั้นการปฏิบัติงานดังนี้

ขั้นที่ 1 รับเครื่องคอมพิวเตอร์ ตรวจการติดตั้ง Python 3 และ VS Code
และทบทวนข้อปฏิบัติในการใช้ห้องปฏิบัติการ (15 นาที)

ขั้นที่ 2 ทบทวนโครงสร้างโปรแกรม Python ตัวแปร เงื่อนไข และลูป จากหัวข้อ 6.2 (25
นาที)

ขั้นที่ 3 บันทึกสคริปต์ pid_sim.py ตามหัวข้อ 6.7.1 และรันการจำลองแบบ ON/OFF (30
นาที)

ขั้นที่ 4 รันการจำลองแบบ P และ PI แล้วบันทึกอุณหภูมิสุดท้ายและช่วงการแกว่ง (35 นาที)

ขั้นที่ 5 ปรับค่า Kp และ Ki ตามหัวข้อ 6.7.2 อย่างน้อย 3 ชุด และเปรียบเทียบผล (40 นาที)

ขั้นที่ 6 วิเคราะห์ผลการจำลองและตอบคำถามท้ายใบงาน (20 นาที)

ขั้นที่ 7 สรุปผล ส่งไฟล์สคริปต์และแบบบันทึกผล และปิดเครื่องคอมพิวเตอร์ (15 นาที)

รายการอุปกรณ์ที่ใช้ในการปฏิบัติงานแสดงดังตารางที่ 6.3

### ตารางที่ 6.3 รายการอุปกรณ์สำหรับใบงานปฏิบัติหน่วยเรียนที่ 6.1–6.3

| **ลำดับ** | **รายการ**                                                                                | **จำนวน** | **หมายเหตุ**             |
|----------|-------------------------------------------------------------------------------------------|-----------|-------------------------|
| 1        | บอร์ด ESP32 DevKit พร้อมสาย USB                                                             | 1 ชุด      | ใบงาน 6.2               |
| 2        | LED 1 ดวงพร้อมตัวต้านทาน 220 Ω, ปุ่มกด, โพเทนชิโอมิเตอร์ 10 kΩ, เบรดบอร์ด และสายจัมเปอร์             | 1 ชุด      | ใบงาน 6.2               |
| 3        | คอมพิวเตอร์ติดตั้ง Arduino IDE (Arduino-ESP32), Python 3 + pyserial และ Visual Studio (VB.NET) | 1 เครื่อง   | ใบงาน 6.1–6.2           |
| 4        | ชุดฝึก PLC Mitsubishi FX5UJ-60MT/ES และแหล่งจ่าย 24 VDC                                       | 1 ชุด      | ใบงาน 6.3               |
| 5        | ปุ่มกด SW PBG, SW PBY, SW PBR และหลอดไฟ LAMP G, Y, R                                        | 1 ชุด      | ต่อ X3–X5 และ Y1, Y3, Y4 |
| 6        | คอมพิวเตอร์ติดตั้ง GX Works3 พร้อมสาย LAN/USB                                                   | 1 เครื่อง   | ใบงาน 6.3               |
| 7        | สายไฟต่อวงจรและมัลติมิเตอร์                                                                    | 1 ชุด      | ตรวจสายก่อนจ่ายไฟ         |

### 6.7.1 งานรันสคริปต์จำลองการควบคุมด้วย Python

เมื่อปฏิบัติงานในหัวข้อนี้แล้ว ผู้เรียนสามารถสังเกตผลการรันสคริปต์จำลองการควบคุมด้วย Python
ได้ถูกต้อง โดยปฏิบัติตามลำดับขั้นในใบงานปฏิบัติหน่วยเรียนที่ 6.1

### ตารางที่ 6.4 สคริปต์ Python จำลองการควบคุมแบบ ON/OFF, P และ PI (pid_sim.py)

<table>
<colgroup>
<col style="width: 100%" />
</colgroup>
<thead>
<tr class="header">
<th><p># pid_sim.py : ON/OFF (hysteresis) vs P vs PI control of a
first-order heater model</p>
<p>def simulate(controller, sp=45.0, ta=25.0, k=60.0, tau=60.0, dt=0.5,
t_end=300.0):</p>
<p>t, temp, u, log = 0.0, ta, 0.0, []</p>
<p>state = {"integral": 0.0}</p>
<p>while t &lt; t_end:</p>
<p>u = controller(temp, sp, u, dt, state)</p>
<p>temp += dt * (-(temp - ta) + k * u) / tau # dT/dt = (-(T-Ta) +
K*u)/tau</p>
<p>log.append(temp)</p>
<p>t += dt</p>
<p>return log</p>
<p>def on_off(temp, sp, u, dt, st): # hysteresis +/-1 degC</p>
<p>if temp &lt; sp - 1: return 1.0</p>
<p>if temp &gt; sp + 1: return 0.0</p>
<p>return u</p>
<p>def p_ctrl(temp, sp, u, dt, st, kp=0.15):</p>
<p>return min(1.0, max(0.0, kp * (sp - temp)))</p>
<p>def pi_ctrl(temp, sp, u, dt, st, kp=0.15, ki=0.01):</p>
<p>err = sp - temp</p>
<p>new_i = st["integral"] + ki * err * dt</p>
<p>u_raw = kp * err + new_i</p>
<p>u = min(1.0, max(0.0, u_raw))</p>
<p>if u == u_raw: # anti-windup: integrate only if not saturated</p>
<p>st["integral"] = new_i</p>
<p>return u</p>
<p>if __name__ == "__main__":</p>
<p>for name, c in (("ON/OFF", on_off), ("P", p_ctrl), ("PI",
pi_ctrl)):</p>
<p>log = simulate(c)</p>
<p>tail = log[-100:]</p>
<p>print("%-6s final %.2f degC last-50s range %.2f..%.2f" % (name,
log[-1], min(tail), max(tail)))</p></th>
</tr>
</thead>
<tbody>
</tbody>
</table>

ผลที่คาดหวังของ pid_sim.py: ON/OFF final 45.66 °C (ช่วง 43.84–46.19 °C), P
final 43.00 °C, PI final 45.00 °C

1\. บันทึกไฟล์ pid_sim.py รัน python pid_sim.py
แล้วบันทึกอุณหภูมิสุดท้ายและช่วงแกว่งของ ON/OFF, P, PI ลงในแบบบันทึกผลการปฏิบัติงาน
เปรียบเทียบกับภาพที่ 6.10 และตารางที่ 6.2

### 6.7.2 งานปรับค่า Kp และ Ki และเปรียบเทียบผล

เมื่อปฏิบัติงานในหัวข้อนี้แล้ว ผู้เรียนสามารถดำเนินการปรับค่า Kp และ Ki
และเปรียบเทียบผลได้ถูกต้อง

1\. ปรับค่า Kp และ Ki ในไฟล์ แล้วอธิบายผลที่เปลี่ยนไป

ให้ปรับค่า Kp และ Ki อย่างน้อย 3 ชุด บันทึกอุณหภูมิสุดท้าย ช่วงการแกว่ง
และค่าคลาดเคลื่อนสถานะคงตัว แล้วเปรียบเทียบกับผลในตารางที่ 6.2

ให้สรุปผลการเปรียบเทียบการควบคุมแบบ ON/OFF, P และ PI จากผลจำลอง
พร้อมอธิบายผลของการปรับค่า Kp และ Ki ต่อค่าคลาดเคลื่อนสถานะคงตัวและการแกว่งของระบบ

## 6.8 การเขียนโปรแกรม ESP32 (Arduino) และการสั่งงานผ่านพอร์ตอนุกรมด้วย Python และ Visual Basic

หัวข้อนี้เป็นการฝึกปฏิบัติตามใบงานปฏิบัติหน่วยเรียนที่ 6.2 เรื่องการเขียนโปรแกรม ESP32
(Arduino) และการสั่งงานผ่านพอร์ตอนุกรมด้วย Python และ Visual Basic ใช้เวลา 3
ชั่วโมง (180 นาที) ผู้เรียนนำความรู้จากหัวข้อที่ผ่านมามาปฏิบัติงานจริง
และบันทึกผลลงในแบบบันทึกผลการปฏิบัติงาน โดยมีลำดับขั้นการปฏิบัติงานดังนี้

ขั้นที่ 1 รับชุดอุปกรณ์ ตรวจความพร้อมตามรายการ และทบทวนข้อควรระวังเรื่องแรงดันขา GPIO
3.3 V ร่วมกับครูผู้สอน (15 นาที)

ขั้นที่ 2 ต่อวงจร ESP32 กับ LED ปุ่ม และโพเทนชิโอมิเตอร์ตามภาพที่ 6.15
แล้วให้ครูตรวจการต่อวงจร (25 นาที)

ขั้นที่ 3 อัปโหลดสเก็ตช์ตามหัวข้อ 6.8.1 และทดสอบคำสั่ง L1, L0, P128, R และ B ใน
Serial Monitor (35 นาที)

ขั้นที่ 4 ปิด Serial Monitor รันสคริปต์ pc_control.py ตามหัวข้อ 6.8.2 ส่งคำสั่ง
และบันทึกค่า ADC (30 นาที)

ขั้นที่ 5 สร้างฟอร์ม Visual Basic ตามหัวข้อ 6.8.3 และทดสอบ Connect, LED,
TrackBar และการแสดงค่า ADC (40 นาที)

ขั้นที่ 6 วิเคราะห์ผลการทดลองและตอบคำถามท้ายใบงาน (20 นาที)

ขั้นที่ 7 สรุปผล ส่งแบบบันทึกผล ถอดสายและเก็บอุปกรณ์ และทำความสะอาดพื้นที่ปฏิบัติงาน (15
นาที)

หมายเหตุ: หัวข้อนี้ใช้ ESP32 กับพอร์ตอนุกรมตามแนวทางของโครงงาน ESP32 Smart Rice
Dryer สคริปต์ Python ผ่านการทดสอบด้วยพอร์ตจำลองแล้ว ส่วนสเก็ตช์ ESP32 และโค้ด
Visual Basic ผู้สอนควรทดสอบกับอุปกรณ์จริงก่อนใช้งานในชั้นเรียน

อุปกรณ์ที่ใช้ในการปฏิบัติงานเป็นไปตามรายการในตารางที่ 6.3 ของหัวข้อ 6.7

### 6.8.1 งานเขียนโปรแกรม ESP32 ด้วย Arduino IDE

เมื่อปฏิบัติงานในหัวข้อนี้แล้ว ผู้เรียนสามารถสังเกตการต่อวงจรและการเขียนโปรแกรม ESP32
ด้วย Arduino IDE ได้ถูกต้อง โดยปฏิบัติตามลำดับขั้นในใบงานปฏิบัติหน่วยเรียนที่ 6.2
และให้ครูผู้สอนตรวจสอบก่อนจ่ายไฟทุกครั้ง

**ข้อควรระวัง: ปิดแหล่งจ่ายไฟก่อนต่อหรือแก้ไขสายทุกครั้ง ESP32 ใช้ขา GPIO แรงดัน 3.3 V ห้ามป้อนแรงดันเกิน 3.3 V เข้าขา GPIO และให้ผู้สอนตรวจก่อนจ่ายไฟทุกครั้ง สำหรับชุดฝึก PLC ถอดปลั๊กหรือปิดเบรกเกอร์ก่อนต่อสาย**

![ภาพที่ 6.15 การต่อวงจร ESP32 กับ LED ปุ่ม และโพเทนชิโอมิเตอร์](/images/book/image119.png)

ที่มา: ผู้จัดทำ (ภาพประกอบต้นฉบับ)

1\. ต่อวงจรตามภาพที่ 6.15 ให้ผู้สอนตรวจ

2\. เปิด Arduino IDE เลือกบอร์ด ESP32 Dev Module และพอร์ต COM
คัดลอกสเก็ตช์ในตารางที่ 6.5 อัปโหลดลงบอร์ด

3\. เปิด Serial Monitor ที่ 115200 baud (Newline) พิมพ์ L1, L0, P128, R, B
ทีละคำสั่ง สังเกตผลที่ LED และข้อความตอบกลับ

4\. หมุนโพเทนชิโอมิเตอร์แล้วส่ง R หลายครั้ง บันทึกค่า ADC
และคำนวณแรงดันเทียบกับที่วัดด้วยมัลติมิเตอร์ ลงในแบบบันทึกผลการปฏิบัติงาน

**ตารางที่ 6.5 สเก็ตช์ ESP32 สำหรับควบคุม LED อ่านปุ่ม และอ่านค่า ADC ผ่านพอร์ตอนุกรม (esp32_serial_ctrl.ino)**

<table>
<colgroup>
<col style="width: 100%" />
</colgroup>
<thead>
<tr class="header">
<th><p>// esp32_serial_ctrl.ino : LED (PWM), push button and
potentiometer over USB serial</p>
<p>// Board: ESP32 DevKit (Arduino-ESP32 core 2.x). For core 3.x replace
ledcSetup/ledcAttachPin</p>
<p>// with ledcAttach(LED_PIN, PWM_FREQ, PWM_BITS) and use
ledcWrite(LED_PIN, duty).</p>
<p>const int LED_PIN = 18; // LED + 220 ohm to GND</p>
<p>const int BTN_PIN = 4; // push button to GND (INPUT_PULLUP)</p>
<p>const int POT_PIN = 34; // potentiometer wiper (ADC1)</p>
<p>const int PWM_CH = 0, PWM_FREQ = 5000, PWM_BITS = 8; // duty range
0..255</p>
<p>String line = ""; // receive buffer</p>
<p>void setup {</p>
<p>Serial.begin(115200);</p>
<p>pinMode(BTN_PIN, INPUT_PULLUP);</p>
<p>ledcSetup(PWM_CH, PWM_FREQ, PWM_BITS);</p>
<p>ledcAttachPin(LED_PIN, PWM_CH);</p>
<p>Serial.println("READY");</p>
<p>}</p>
<p>void handle(String cmd) { // one command per line</p>
<p>cmd.trim;</p>
<p>if (cmd == "L1") { ledcWrite(PWM_CH, 255); Serial.println("OK
LED=1"); }</p>
<p>else if (cmd == "L0") { ledcWrite(PWM_CH, 0); Serial.println("OK
LED=0"); }</p>
<p>else if (cmd.startsWith("P")) { // P&lt;0..255&gt;</p>
<p>int d = constrain(cmd.substring(1).toInt, 0, 255);</p>
<p>ledcWrite(PWM_CH, d);</p>
<p>Serial.print("OK PWM="); Serial.println(d);</p>
<p>}</p>
<p>else if (cmd == "R") { // read potentiometer</p>
<p>int adc = analogRead(POT_PIN); // 0..4095</p>
<p>Serial.print("ADC="); Serial.print(adc);</p>
<p>Serial.print(" ("); Serial.print(adc * 3.3 / 4095.0, 2);
Serial.println(" V)");</p>
<p>}</p>
<p>else if (cmd == "B") { Serial.println(digitalRead(BTN_PIN) == LOW ?
"BTN=1" : "BTN=0"); }</p>
<p>else { Serial.println("ERR unknown command"); }</p>
<p>}</p>
<p>void loop {</p>
<p>while (Serial.available) {</p>
<p>char c = Serial.read;</p>
<p>if (c == '\n') { handle(line); line = ""; } // end of command</p>
<p>else if (c != '\r') { line += c; }</p>
<p>}</p>
<p>}</p></th>
</tr>
</thead>
<tbody>
</tbody>
</table>

### 6.8.2 งานสั่งงาน ESP32 ด้วย Python

เมื่อปฏิบัติงานในหัวข้อนี้แล้ว ผู้เรียนสามารถดำเนินการสั่งงาน ESP32 ด้วย Python ได้ถูกต้อง

![ภาพที่ 6.16 ตัวอย่างการสนทนาผ่านเครื่องมือ Python](/images/book/image120.png)

ที่มา: ผู้จัดทำ (ภาพประกอบต้นฉบับ)

1\. ติดตั้งไลบรารีด้วย pip install pyserial บันทึกไฟล์ pc_control.py ตามตารางที่
6.6 แล้วรันด้วย python pc_control.py COM3 (เปลี่ยนชื่อพอร์ตให้ตรง) ปิด Serial
Monitor ก่อนรัน เพราะพอร์ตใช้ร่วมกันไม่ได้

2\. ส่งคำสั่งเหมือนหัวข้อ 6.8.1 และบันทึกผลลงในแบบบันทึกผลการปฏิบัติงาน

### ตารางที่ 6.6 สคริปต์ Python สำหรับสั่งงาน ESP32 ผ่านพอร์ตอนุกรม (pc_control.py)

<table>
<colgroup>
<col style="width: 100%" />
</colgroup>
<thead>
<tr class="header">
<th><p># pc_control.py : control the ESP32 sketch from a PC (pip install
pyserial)</p>
<p>import sys</p>
<p>import time</p>
<p>import serial # pyserial</p>
<p>def send(port, text):</p>
<p>"""Send one command line and return the first reply line."""</p>
<p>port.write((text + "\n").encode("ascii")) # commands end with LF</p>
<p>return port.readline.decode("ascii", "ignore").strip</p>
<p>def main:</p>
<p>name = sys.argv[1] if len(sys.argv) &gt; 1 else "COM3"</p>
<p>with serial.Serial(name, 115200, timeout=1) as port:</p>
<p>time.sleep(2) # ESP32 resets when the port opens</p>
<p>port.reset_input_buffer</p>
<p>print("Connected", name, "@115200")</p>
<p>while True:</p>
<p>cmd = input("cmd&gt; ").strip</p>
<p>if cmd in ("exit", "quit"):</p>
<p>break</p>
<p>if cmd:</p>
<p>print(send(port, cmd))</p>
<p>if __name__ == "__main__":</p>
<p>main</p></th>
</tr>
</thead>
<tbody>
</tbody>
</table>

### 6.8.3 งานสร้างฟอร์ม Visual Basic ควบคุม ESP32

เมื่อปฏิบัติงานในหัวข้อนี้แล้ว ผู้เรียนสามารถดำเนินการสร้างฟอร์ม Visual Basic ควบคุม
ESP32 ได้ถูกต้อง

![ภาพที่ 6.17 การออกแบบฟอร์ม Visual Basic](/images/book/image121.png)

ที่มา: ผู้จัดทำ (ภาพประกอบต้นฉบับ)

1\. เปิด Visual Studio สร้างโปรเจกต์ Windows Forms App (VB.NET)
วางคอนโทรลและตั้งชื่อตามภาพที่ 6.17

2\. คัดลอกโค้ด Form1.vb ในตารางที่ 6.7 รันโปรแกรม เลือกพอร์ต กด Connect (ESP32
จะรีเซ็ตเมื่อเปิดพอร์ต ให้รอ 2 วินาที) แล้วกด LED ON/OFF เลื่อน TrackBar และสังเกตค่า
ADC

3\. บันทึกผลลงในแบบบันทึกผลการปฏิบัติงาน พร้อมอธิบายว่าเหตุใดต้องใช้ BeginInvoke
ในเหตุการณ์ DataReceived

### ตารางที่ 6.7 โค้ด Visual Basic (Form1.vb) สำหรับควบคุม ESP32

<table>
<colgroup>
<col style="width: 100%" />
</colgroup>
<thead>
<tr class="header">
<th><p>' Form1.vb : VB.NET (Windows Forms) controller for the ESP32
serial sketch</p>
<p>Imports System.IO.Ports</p>
<p>Public Class Form1</p>
<p>Private WithEvents sp As New SerialPort</p>
<p>Private Sub Form1_Load(sender As Object, e As EventArgs) Handles
MyBase.Load</p>
<p>cboPort.Items.AddRange(SerialPort.GetPortNames) ' list COM ports</p>
<p>If cboPort.Items.Count &gt; 0 Then cboPort.SelectedIndex = 0</p>
<p>tbDuty.Minimum = 0 : tbDuty.Maximum = 255 ' PWM range</p>
<p>Timer1.Interval = 500 : Timer1.Enabled = False</p>
<p>End Sub</p>
<p>Private Sub btnConnect_Click(sender As Object, e As EventArgs)
Handles btnConnect.Click</p>
<p>If sp.IsOpen Then</p>
<p>Timer1.Enabled = False : sp.Close : btnConnect.Text = "Connect"</p>
<p>Else</p>
<p>sp.PortName = cboPort.Text : sp.BaudRate = 115200</p>
<p>sp.NewLine = vbLf ' sketch replies end with LF</p>
<p>sp.Open : btnConnect.Text = "Disconnect"</p>
<p>Timer1.Enabled = True ' poll the potentiometer</p>
<p>End If</p>
<p>End Sub</p>
<p>Private Sub Send(cmd As String)</p>
<p>If sp.IsOpen Then sp.WriteLine(cmd) ' WriteLine appends NewLine</p>
<p>End Sub</p>
<p>Private Sub btnOn_Click(sender As Object, e As EventArgs) Handles
btnOn.Click</p>
<p>Send("L1")</p>
<p>End Sub</p>
<p>Private Sub btnOff_Click(sender As Object, e As EventArgs) Handles
btnOff.Click</p>
<p>Send("L0")</p>
<p>End Sub</p>
<p>Private Sub tbDuty_Scroll(sender As Object, e As EventArgs) Handles
tbDuty.Scroll</p>
<p>Send("P" &amp; tbDuty.Value) ' e.g. P128</p>
<p>End Sub</p>
<p>Private Sub Timer1_Tick(sender As Object, e As EventArgs) Handles
Timer1.Tick</p>
<p>Send("R") ' ask for ADC value</p>
<p>End Sub</p>
<p>Private Sub sp_DataReceived(sender As Object, e As
SerialDataReceivedEventArgs) Handles sp.DataReceived</p>
<p>Try</p>
<p>Dim msg As String = sp.ReadLine.Trim ' runs on a worker thread</p>
<p>Me.BeginInvoke(Sub lblAdc.Text = msg) ' update UI on the UI
thread</p>
<p>Catch ex As Exception</p>
<p>End Try</p>
<p>End Sub</p>
<p>Private Sub Form1_FormClosing(sender As Object, e As
FormClosingEventArgs) Handles MyBase.FormClosing</p>
<p>If sp.IsOpen Then sp.Close</p>
<p>End Sub</p>
<p>End Class</p></th>
</tr>
</thead>
<tbody>
</tbody>
</table>

การตั้งค่าโปรแกรมและตรวจสอบการทำงานมีขั้นตอนดังนี้

1\. ตรวจพอร์ต COM ใน Device Manager เมื่อต่อ ESP32 ตั้ง Baud 115200
และปิดโปรแกรมที่ใช้พอร์ตซ้ำก่อนอัปโหลดหรือรันสคริปต์

2\. ตรวจว่า sp.NewLine = vbLf ตรงกับสเก็ตช์ และตั้ง Timer1.Enabled
เมื่อเชื่อมต่อแล้วเท่านั้น

ให้สรุปผลการควบคุม LED และการอ่านค่า ADC ด้วยคำสั่งอนุกรมจากสามแนวทาง ได้แก่ Serial
Monitor, Python และ Visual Basic พร้อมเปรียบเทียบข้อดีและข้อจำกัดของแต่ละแนวทาง

## 6.9 การเขียนโปรแกรมแลดเดอร์ Input-Output ซีลอิน ไทเมอร์ และเคาน์เตอร์บน PLC FX5UJ

หัวข้อนี้เป็นการฝึกปฏิบัติตามใบงานปฏิบัติหน่วยเรียนที่ 6.3 เรื่องการเขียนโปรแกรมแลดเดอร์
Input-Output ซีลอิน ไทเมอร์ และเคาน์เตอร์บน PLC FX5UJ ใช้เวลา 3 ชั่วโมง (180
นาที) ผู้เรียนนำความรู้จากหัวข้อที่ผ่านมามาปฏิบัติงานจริง
และบันทึกผลลงในแบบบันทึกผลการปฏิบัติงาน โดยมีลำดับขั้นการปฏิบัติงานดังนี้

ขั้นที่ 1 รับชุดฝึก PLC FX5UJ-60MT/ES ตรวจความพร้อมของอุปกรณ์ตามรายการ
และทบทวนข้อควรระวังด้านความปลอดภัยร่วมกับครูผู้สอน (15 นาที)

ขั้นที่ 2 ต่อปุ่ม PBG, PBY, PBR เข้า X3–X5 และหลอดไฟเข้า Y1, Y3, Y4 ตามหัวข้อ 6.9.1
แล้วให้ครูตรวจการต่อวงจร (25 นาที)

ขั้นที่ 3 เขียนและทดสอบแลดเดอร์ Input-Output และวงจรซีลอิน (การทดลองที่ 1 และ 6)
(35 นาที)

ขั้นที่ 4 เขียนและทดสอบแลดเดอร์ไทเมอร์ร่วมกับวงจรซีลอินตามหัวข้อ 6.9.2 (35 นาที)

ขั้นที่ 5 เขียนและทดสอบแลดเดอร์เคาน์เตอร์ตามหัวข้อ 6.9.3 (35 นาที)

ขั้นที่ 6 วิเคราะห์ผลการทดลองและตอบคำถามท้ายใบงาน (20 นาที)

ขั้นที่ 7 สรุปผล ส่งแบบบันทึกผล ปิดไฟ ถอดสายและเก็บอุปกรณ์ และทำความสะอาดพื้นที่ปฏิบัติงาน
(15 นาที)

หมายเหตุ: เนื้อหาการปฏิบัติงานในหัวข้อนี้ปรับจากใบงานชุดฝึก PLC (การทดลองที่ 1
Input-Output การทดลองที่ 6 Self Holding, Timer & Self Holding และ Counter)
ของ Konlatee Design Mechanical Limited Partnership

อุปกรณ์ที่ใช้ในการปฏิบัติงานเป็นไปตามรายการในตารางที่ 6.3 ของหัวข้อ 6.7

### 6.9.1 งาน Input-Output และวงจรซีลอิน (การทดลองที่ 1 และ 6)

เมื่อปฏิบัติงานในหัวข้อนี้แล้ว ผู้เรียนสามารถสังเกตการทำงานของแลดเดอร์ Input-Output
และวงจรซีลอินได้ถูกต้อง โดยปฏิบัติตามลำดับขั้นในใบงานปฏิบัติหน่วยเรียนที่ 6.3
และให้ครูผู้สอนตรวจสอบก่อนจ่ายไฟทุกครั้ง โจทย์คือ X3 → Y1 (LAMP G), X4 → Y3 (LAMP
Y), X5 → Y4 (LAMP R) และวงจรซีลอินที่กด PBG แล้วปล่อย LAMP G ติดค้าง กด PBY
แล้วดับ

![ภาพที่ 6.18 ใบงาน Exp1: การต่อวงจรอินพุต](/images/book/image122.png)

ที่มา: เอกสารชุดฝึกอบรม Workshop PLC (Konlatee Design Mechanical LP)

![ภาพที่ 6.19 ใบงาน Exp1: การต่อวงจรเอาต์พุต](/images/book/image123.png)

ที่มา: เอกสารชุดฝึกอบรม Workshop PLC (Konlatee Design Mechanical LP)

![ภาพที่ 6.20 ใบงาน Exp1: โปรแกรมแลดเดอร์ใน GX Works3](/images/book/image124.png)

ที่มา: ภาพหน้าจอจากเอกสารชุดฝึกอบรม Workshop PLC (Konlatee Design Mechanical
LP)

1\. ต่อปุ่ม SW PBG, PBY, PBR เข้า X3, X4, X5 และหลอดไฟเข้า Y1, Y3, Y4 ตามภาพที่
6.18–6.19 (อินพุตแบบ Sink: S/S ต่อ +24 V)

2\. เขียนแลดเดอร์ตามภาพที่ 6.20 กดปุ่มค้าง หลอดติด ปล่อยแล้วดับ
บันทึกผลลงในแบบบันทึกผลการปฏิบัติงาน

![ภาพที่ 6.21 ใบงาน Exp6: โปรแกรมแลดเดอร์ซีลอิน](/images/book/image125.png)

ที่มา: ภาพหน้าจอจากเอกสารชุดฝึกอบรม Workshop PLC (Konlatee Design Mechanical
LP)

ใช้การต่อสายเดียวกับ Exp1 (ภาพที่ 6.18–6.19) เขียนแลดเดอร์ตามภาพที่ 6.21
ทดสอบและบันทึกผลลงในแบบบันทึกผลการปฏิบัติงาน

### 6.9.2 งานไทเมอร์ร่วมกับวงจรซีลอิน

เมื่อปฏิบัติงานในหัวข้อนี้แล้ว
ผู้เรียนสามารถดำเนินการเขียนโปรแกรมไทเมอร์ร่วมกับวงจรซีลอินได้ถูกต้อง โจทย์คือ กด PBG
ค้าง 5 วินาที LAMP G ติดค้าง กด PBY แล้วดับ

![ภาพที่ 6.22 ใบงาน Timer & Self-holding: การต่อวงจรอินพุต](/images/book/image126.png)

ที่มา: เอกสารชุดฝึกอบรม Workshop PLC (Konlatee Design Mechanical LP)

![ภาพที่ 6.23 ใบงาน Timer & Self-holding: การต่อวงจรเอาต์พุต](/images/book/image127.png)

ที่มา: เอกสารชุดฝึกอบรม Workshop PLC (Konlatee Design Mechanical LP)

![ภาพที่ 6.24 ใบงาน Timer & Self-holding: โปรแกรมแลดเดอร์](/images/book/image128.png)

ที่มา: ภาพหน้าจอจากเอกสารชุดฝึกอบรม Workshop PLC (Konlatee Design Mechanical
LP)

หมายเหตุ: ภาพต้นฉบับแสดงค่าไทเมอร์ T0 K15 แต่โจทย์กำหนดเวลา 5 วินาที ให้ตั้ง K50
(หน่วย 100 ms) ตามโจทย์ และตรวจหน่วยของไทเมอร์ใน GX Works3 ของชุดฝึกก่อนใช้งาน
ทดสอบโดยกดค้าง 3 วินาทีและ 6 วินาที เปรียบเทียบผล

### 6.9.3 งานเคาน์เตอร์

เมื่อปฏิบัติงานในหัวข้อนี้แล้ว
ผู้เรียนสามารถดำเนินการเขียนโปรแกรมเคาน์เตอร์และทดสอบการรีเซ็ตได้ถูกต้อง โจทย์คือ กด
PBG ครบ 10 ครั้ง LAMP G ติดค้าง กด PBY แล้วดับ

![ภาพที่ 6.25 ใบงาน Counter: การต่อวงจรอินพุต](/images/book/image129.png)

ที่มา: เอกสารชุดฝึกอบรม Workshop PLC (Konlatee Design Mechanical LP)

![ภาพที่ 6.26 ใบงาน Counter: การต่อวงจรเอาต์พุต](/images/book/image130.png)

ที่มา: เอกสารชุดฝึกอบรม Workshop PLC (Konlatee Design Mechanical LP)

![ภาพที่ 6.27 ใบงาน Counter: โปรแกรมแลดเดอร์](/images/book/image131.png)

ที่มา: ภาพหน้าจอจากเอกสารชุดฝึกอบรม Workshop PLC (Konlatee Design Mechanical
LP)

เขียนแลดเดอร์ตามภาพที่ 6.27 ทดสอบกด X3 ครบ 10 ครั้ง และกด X4 เพื่อรีเซ็ต
บันทึกผลลงในแบบบันทึกผลการปฏิบัติงาน

### ตารางที่ 6.8 โปรแกรมแลดเดอร์เทียบเท่าของการทดลอง PLC ในใบงานปฏิบัติหน่วยเรียนที่ 6.3

<table>
<colgroup>
<col style="width: 18%" />
<col style="width: 46%" />
<col style="width: 35%" />
</colgroup>
<thead>
<tr class="header">
<th><strong>การทดลอง</strong></th>
<th><strong>แถวแลดเดอร์</strong></th>
<th><strong>ความหมาย</strong></th>
</tr>
<tr class="odd">
<th colspan="3"><p>(* Structured Text equivalent of Exp1 and Exp6 (GX
Works3) *)</p>
<p>(* X3,X4,X5 = push buttons PBG, PBY, PBR ; Y1,Y3,Y4 = lamps G, Y, R
*)</p>
<p>Y1 := X3; Y3 := X4; Y4 := X5; (* Exp1 : lamp follows its button
*)</p>
<p>(* Exp6 uses the same wiring: replace the line above by the seal-in
rung *)</p>
<p>Y1 := (X3 OR Y1) AND NOT X4; (* Exp6 : self-holding *)</p></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>Exp1</td>
<td>X3 → Y1, X4 → Y3, X5 → Y4</td>
<td>ปุ่มแต่ละปุ่มสั่งหลอดของตนขณะกดค้าง</td>
</tr>
<tr class="even">
<td>Exp6</td>
<td>(X3 OR Y1) AND NOT X4 → Y1</td>
<td>ซีลอิน: X3 สั่งติดค้าง X4 (NC) หยุด</td>
</tr>
<tr class="odd">
<td>Timer &amp; Self-holding</td>
<td>แถวที่ 1: X3 AND NOT Y1 → T0 (K50) แถวที่ 2: ((T0 OR Y1) AND NOT X4) →
Y1</td>
<td>กด X3 ครบเวลา T0 ทำงาน สั่ง Y1 และซีลอินด้วย Y1 จนกด X4</td>
</tr>
<tr class="even">
<td>Counter</td>
<td>X3 → C0 (K10) แถวที่ 2: C0 → Y1 แถวที่ 3: X4 → RST C0</td>
<td>นับ X3 ครบ 10 ครั้ง Y1 ติด X4 ล้างค่านับ</td>
</tr>
</tbody>
</table>

การตั้งค่าโปรแกรมและตรวจสอบการทำงานมีขั้นตอนดังนี้

1\. เปิด GX Works3 สร้างโครงการใหม่ เลือกรุ่น CPU ให้ตรงกับชุดฝึก เขียนแลดเดอร์
Convert เขียนลง PLC เปลี่ยนเป็นโหมด RUN และใช้หน้าต่างตรวจสอบอุปกรณ์ดูสถานะ X3–X5,
Y1, Y3, Y4, T0, C0

2\. เปรียบเทียบผลที่ได้กับตัวอย่างคำนวณที่ 6.1–6.8 ในใบความรู้

ให้สรุปผลการทำงานของแลดเดอร์ Input-Output วงจรซีลอิน ไทเมอร์ และเคาน์เตอร์
พร้อมอธิบายผลของรอบสแกนของ PLC ต่อการทำงานของโปรแกรม

## บทสรุป

การเขียนโปรแกรมควบคุมคือการกำหนดขั้นตอนให้ตัวควบคุมอ่านค่าจากเซนเซอร์ ตัดสินใจ
และสั่งแอคชูเอเตอร์ ภาษาที่ใช้ขึ้นกับแพลตฟอร์ม Python
เหมาะกับพีซีสำหรับเก็บข้อมูลและทดสอบอัลกอริทึม Arduino C++
ทำงานบนไมโครคอนโทรลเลอร์ที่สั่งงานขาโดยตรง ด้วย PWM และ ADC Visual Basic
ใช้สร้างหน้าจอควบคุมบน Windows แบบเหตุการณ์ และ PLC
ใช้แลดเดอร์ที่ทำงานเป็นรอบสแกนในงานอุตสาหกรรม ทั้งสี่แบบสื่อสารกันด้วยพอร์ตอนุกรม (8N1)
หรือสัญญาณ I/O และการเลือกอัลกอริทึม เช่น ON/OFF, P และ PI
มีผลต่อความแม่นยำของระบบ (Shetty & Kolk, 2011)

## แบบฝึกหัดท้ายหน่วยเรียน

คำชี้แจง: ให้นักศึกษาตอบคำถามต่อไปนี้ให้ถูกต้อง (ข้อละ 1 คะแนน รวม 10 คะแนน)

**1. เปรียบเทียบภาษา Python, Arduino C++, Visual Basic และแลดเดอร์ (PLC) ในด้านแพลตฟอร์มที่ใช้ และบทบาทในระบบควบคุม อย่างน้อยภาษาละ 1 ประเด็น**

<details><summary>เฉลย</summary>

Python: รันบนพีซี/Raspberry Pi ใช้เก็บข้อมูล วิเคราะห์ และสื่อสารกับอุปกรณ์ Arduino C++: รันบนไมโครคอนโทรลเลอร์ อ่าน/เขียนขาโดยตรง ควบคุมระดับอุปกรณ์ Visual Basic: รันบน Windows เหมาะทำหน้าจอผู้ใช้ (GUI) แบบขับเคลื่อนด้วยเหตุการณ์ แลดเดอร์: รันบน PLC ควบคุมเครื่องจักร ทนทาน แก้ไขและตรวจสอบง่าย

</details>

**2. การสื่อสารอนุกรม 9,600 baud แบบ 8N1 ส่งได้สูงสุดกี่ไบต์ต่อวินาที และที่ 115,200 baud ส่งข้อความ 100 ตัวอักษรใช้เวลาเท่าใด**

<details><summary>เฉลย</summary>

ที่ 9,600 baud: 1 ไบต์ = 10 บิต จึงส่งได้ 9,600/10 = 960 ไบต์/วินาที ที่ 115,200 baud: 100 × 10/115,200 ≈ 0.00868 s ≈ 8.68 ms

</details>

**3. ESP32 ใช้ PWM 8 บิต ต้องการดิวตี้ 40% และแรงดันเฉลี่ยที่แหล่งจ่าย 3.3 V จงหาค่าที่ส่งให้ ledcWrite และแรงดันเฉลี่ย**

<details><summary>เฉลย</summary>

ค่าดิวตี้ = 0.40 × 255 = 102 แรงดันเฉลี่ย = 0.40 × 3.3 = 1.32 V

</details>

**4. ESP32 อ่านค่า ADC 12 บิตได้ 3,000 (อ้างอิง 3.3 V) จงหาแรงดันที่ขา และเขียนนิพจน์ Python แปลงค่า ADC (0–4095) เป็นดิวตี้ (0–255) พร้อมคำนวณเมื่อ ADC = 2048**

<details><summary>เฉลย</summary>

V = 3,000 × 3.3/4,095 ≈ 2.42 V นิพจน์: duty = adc * 255 // 4095 เมื่อ adc = 2048 ได้ duty = 522,240 // 4,095 = 127

</details>

**5. เขียนสมการลอจิกและอธิบายวงจรซีลอินสำหรับ Exp6: กด SW PBG (X3) แล้วปล่อย LAMP G (Y1) ติดค้าง กด SW PBY (X4) แล้วดับ**

<details><summary>เฉลย</summary>

Y1 = (X3 OR Y1) AND NOT X4 แถวบน: X3 (NO) อนุกรมกับ X4 (NC) ไปที่คอยล์ Y1 แถวล่าง: หน้าสัมผัส NO ของ Y1 ต่อขนานกับ X3 เมื่อ Y1 ติด หน้าสัมผัส Y1 ค้ำวงจรไว้ แม้ปล่อย X3 จนกว่ากด X4 วงจรจึงขาด

</details>

**6. อธิบายการทำงานของ Exp10 (Timer & Self-holding): กด X3 ค้าง 5 วินาที LAMP G ติดค้าง กด X4 แล้วดับ ว่าใช้ไทเมอร์และซีลอินอย่างไร**

<details><summary>เฉลย</summary>

ใช้ X3 (NO) อนุกรมกับ NC ของ Y1 สั่งไทเมอร์ T0 ตั้งเวลา 5 วินาที (K50 สำหรับหน่วย 100 ms) เมื่อ T0 ครบ หน้าสัมผัส T0 สั่ง Y1 และใช้หน้าสัมผัส Y1 ซีลอินค้ำ การกด X4 (NC) ตัดวงจรทำให้ Y1 ดับ ถ้าปล่อย X3 ก่อนครบ 5 วินาที ไทเมอร์รีเซ็ตและ Y1 ไม่ติด

</details>

**7. เขียนแนวคิดโปรแกรมแลดเดอร์ Exp11 (Counter) ให้กด X3 ครบ 10 ครั้ง LAMP G ติดค้าง และกด X4 รีเซ็ต**

<details><summary>เฉลย</summary>

ใช้ X3 เป็นอินพุตนับของ C0 ตั้งค่า K10 เมื่อนับครบ หน้าสัมผัส C0 สั่ง Y1 ให้ติด ใช้ X4 สั่ง RST C0 เพื่อล้างค่านับและทำให้ Y1 ดับ

</details>

**8. อธิบายรอบสแกนของ PLC และเหตุที่ขณะสแกนค่าอินพุตจึงไม่เปลี่ยนกลางโปรแกรม**

<details><summary>เฉลย</summary>

รอบสแกนคือ 1) รีเฟรชอินพุต คัดลอกสถานะ X เก็บในหน่วยความจำ 2) ประมวลผลโปรแกรมแลดเดอร์จากบนลงล่าง 3) รีเฟรชเอาต์พุต เขียนผลไป Y อินพุตถูกคัดลอกครั้งเดียวต้นรอบ จึงคงที่ตลอดการประมวลผล ทำให้ลอจิกสม่ำเสมอ

</details>

**9. จงอธิบายหน้าที่ของ setup และ loop ใน Arduino และเขียนเงื่อนไขอ่านปุ่มที่ต่อแบบ INPUT_PULLUP ว่ากดอยู่หรือไม่**

<details><summary>เฉลย</summary>

setup ทำงานครั้งเดียวตั้งค่าเริ่มต้น เช่น pinMode, Serial.begin loop ทำงานซ้ำตลอดเพื่ออ่านอินพุต ตัดสินใจ และสั่งเอาต์พุต ปุ่มต่อ INPUT_PULLUP กดอยู่เมื่อ digitalRead(BTN) == LOW

</details>

**10. จากผลจำลอง (Heater, τ = 60 s, เซ็ตพอยต์ 45 °C) เปรียบเทียบ ON/OFF, P และ PI พร้อมอธิบายผล**

<details><summary>เฉลย</summary>

ON/OFF แกว่งอยู่ประมาณ 44–46 °C (ในรันตัวอย่าง 43.8–46.2 °C) P (Kp = 0.15) นิ่งที่ 43 °C เกิด offset 2 °C PI (Kp = 0.15, Ki = 0.01 พร้อมป้องกัน windup) นิ่งที่ 45.00 °C เพราะอินทิกรัลสะสม error จนเป็นศูนย์

# pc_control.py : control the ESP32 sketch from a PC (pip install pyserial) import sys import time import serial                                  # pyserial  def send(port, text):     """Send one command line and return the first reply line."""     port.write((text + "\n").encode("ascii"))  # commands end with LF     return port.readline.decode("ascii", "ignore").strip  def main:     name = sys.argv[1] if len(sys.argv) > 1 else "COM3"     with serial.Serial(name, 115200, timeout=1) as port:         time.sleep(2)                          # ESP32 resets when the port opens         port.reset_input_buffer         print("Connected", name, "@115200")         while True:             cmd = input("cmd> ").strip             if cmd in ("exit", "quit"):                 break             if cmd:                 print(send(port, cmd))  if __name__ == "__main__":     main

# pid_sim.py : ON/OFF (hysteresis) vs P vs PI control of a first-order heater model def simulate(controller, sp=45.0, ta=25.0, k=60.0, tau=60.0, dt=0.5, t_end=300.0):     t, temp, u, log = 0.0, ta, 0.0, []     state = {"integral": 0.0}     while t < t_end:         u = controller(temp, sp, u, dt, state)         temp += dt * (-(temp - ta) + k * u) / tau      # dT/dt = (-(T-Ta) + K*u)/tau         log.append(temp)         t += dt     return log  def on_off(temp, sp, u, dt, st):                       # hysteresis +/-1 degC     if temp < sp - 1: return 1.0     if temp > sp + 1: return 0.0     return u  def p_ctrl(temp, sp, u, dt, st, kp=0.15):     return min(1.0, max(0.0, kp * (sp - temp)))  def pi_ctrl(temp, sp, u, dt, st, kp=0.15, ki=0.01):     err = sp - temp     new_i = st["integral"] + ki * err * dt     u_raw = kp * err + new_i     u = min(1.0, max(0.0, u_raw))     if u == u_raw:                                     # anti-windup: integrate only if not saturated         st["integral"] = new_i     return u  if __name__ == "__main__":     for name, c in (("ON/OFF", on_off), ("P", p_ctrl), ("PI", pi_ctrl)):         log = simulate(c)         tail = log[-100:]         print("%-6s final %.2f degC   last-50s range %.2f..%.2f" % (name, log[-1], min(tail), max(tail)))

</details>

## บรรณานุกรมประจำหน่วย (APA 7th Edition)

Konlatee Design Mechanical Limited Partnership. (n.d.).

เอกสารประกอบการสอนชุดฝึกการเขียนโปรแกรมควบคุมอุปกรณ์ไฟฟ้าด้วยพีแอลซี: การทดลอง PLC

(การทดลองที่ 1, 6, 9–11) \[เอกสารประกอบการอบรม\]. (ไม่ระบุปี)

Mitsubishi Electric Corporation. (2023). MELSEC iQ-F

FX5S/FX5UJ/FX5U/FX5UC user's manual (hardware). Mitsubishi Electric

Corporation.

Shetty, D., & Kolk, R. A. (2011). Mechatronics system design (2nd ed.,

SI). Cengage Learning. (ISBN 978-1-4390-6199-2)

ต้นแบบเครื่องอบข้าวอัจฉริยะควบคุมด้วย ESP32 (ESP32 Smart Rice Dryer): คู่มือเล่มที่ 1,

3 และ 9 และซอร์สโค้ด \[เอกสารประกอบโครงงาน\]. (ม.ป.ป.).

โปรแกรมตัวอย่าง Rs323.ino (การสื่อสารอนุกรม Arduino) \[ซอร์สโค้ด\]. (ม.ป.ป.).

Espressif Systems. (n.d.). Arduino-ESP32 documentation: LEDC (PWM) and

ADC. https://docs.espressif.com/projects/arduino-esp32/en/latest/

Liechti, C. (n.d.). pySerial documentation.

https://pyserial.readthedocs.io/

Microsoft. (n.d.). SerialPort class (System.IO.Ports). Microsoft Learn.

https://learn.microsoft.com/dotnet/api/system.io.ports.serialport

บรรณานุกรมประจำหน่วย (รูปภาพ)

| **ภาพที่** | **ชื่อภาพ**                                              | **แหล่งที่มา**                                                            |

|----------|--------------------------------------------------------|------------------------------------------------------------------------|

| 6.1      | ภาพรวมการเขียนโปรแกรมควบคุมและภาษาที่ใช้                    | ผู้จัดทำ (ภาพประกอบต้นฉบับ)                                                 |

| 6.2      | เปรียบเทียบ Python, Arduino C++, Visual Basic และแลดเดอร์ | ผู้จัดทำ (ภาพประกอบต้นฉบับ)                                                 |

| 6.3      | โครงสร้างโปรแกรม Arduino เทียบรอบสแกน PLC                | ผู้จัดทำ (ภาพประกอบต้นฉบับ อ้างอิงแนวคิดจาก Mitsubishi Electric, 2023)         |

| 6.4      | สถาปัตยกรรมพีซี–ESP32 ผ่านพอร์ตอนุกรม                        | ผู้จัดทำ (ภาพประกอบต้นฉบับ)                                                 |

| 6.5      | โครงสร้างควบคุมพื้นฐานของ Python                           | ผู้จัดทำ (ภาพประกอบต้นฉบับ)                                                 |

| 6.6      | เฟรมอนุกรม UART 8N1 ของอักขระ A (0x41)                   | ผู้จัดทำ (ภาพประกอบต้นฉบับ)                                                 |

| 6.7      | โครงสร้างสเก็ตช์ Arduino                                  | ผู้จัดทำ (ภาพประกอบต้นฉบับ อ้างอิงแนวคิดจาก Espressif Systems, n.d.)           |

| 6.8      | สัญญาณ PWM และแรงดันเฉลี่ย                                 | ผู้จัดทำ (ภาพประกอบต้นฉบับ)                                                 |

| 6.9      | การเขียนโปรแกรมแบบเหตุการณ์ใน Visual Basic                | ผู้จัดทำ (ภาพประกอบต้นฉบับ อ้างอิงแนวคิดจาก Microsoft, n.d.)                   |

| 6.10     | เปรียบเทียบการควบคุม ON/OFF และ P (ผลจำลองด้วย Python)     | ผู้จัดทำ (ภาพประกอบต้นฉบับ จากแบบจำลองอันดับหนึ่ง)                              |

| 6.11     | รอบสแกนของ PLC                                         | ผู้จัดทำ (ภาพประกอบต้นฉบับ อ้างอิงแนวคิดจาก Mitsubishi Electric, 2023)         |

| 6.12     | สัญลักษณ์แลดเดอร์พื้นฐาน                                     | ผู้จัดทำ (ภาพประกอบต้นฉบับ)                                                 |

| 6.13     | วงจรซีลอินและแผนภาพเวลา                                  | ผู้จัดทำ (ภาพประกอบต้นฉบับ)                                                 |

| 6.14     | แผนภาพเวลาของไทเมอร์และเคาน์เตอร์                         | ผู้จัดทำ (ภาพประกอบต้นฉบับ)                                                 |

| 6.15     | การต่อวงจร ESP32 กับ LED ปุ่ม และโพเทนชิโอมิเตอร์             | ผู้จัดทำ (ภาพประกอบต้นฉบับ)                                                 |

| 6.16     | ตัวอย่างการสนทนาผ่านเครื่องมือ Python                        | ผู้จัดทำ (ภาพประกอบต้นฉบับ)                                                 |

| 6.17     | การออกแบบฟอร์ม Visual Basic                             | ผู้จัดทำ (ภาพประกอบต้นฉบับ)                                                 |

| 6.18     | ใบงาน Exp1: การต่อวงจรอินพุต                              | เอกสารชุดฝึกอบรม Workshop PLC (Konlatee Design Mechanical LP)            |

| 6.19     | ใบงาน Exp1: การต่อวงจรเอาต์พุต                            | เอกสารชุดฝึกอบรม Workshop PLC (Konlatee Design Mechanical LP)            |

| 6.20     | ใบงาน Exp1: โปรแกรมแลดเดอร์ใน GX Works3                 | ภาพหน้าจอจากเอกสารชุดฝึกอบรม Workshop PLC (Konlatee Design Mechanical LP) |

| 6.21     | ใบงาน Exp6: โปรแกรมแลดเดอร์ซีลอิน                         | ภาพหน้าจอจากเอกสารชุดฝึกอบรม Workshop PLC (Konlatee Design Mechanical LP) |

| 6.22     | ใบงาน Timer & Self-holding: การต่อวงจรอินพุต              | เอกสารชุดฝึกอบรม Workshop PLC (Konlatee Design Mechanical LP)            |

| 6.23     | ใบงาน Timer & Self-holding: การต่อวงจรเอาต์พุต            | เอกสารชุดฝึกอบรม Workshop PLC (Konlatee Design Mechanical LP)            |

| 6.24     | ใบงาน Timer & Self-holding: โปรแกรมแลดเดอร์             | ภาพหน้าจอจากเอกสารชุดฝึกอบรม Workshop PLC (Konlatee Design Mechanical LP) |

| 6.25     | ใบงาน Counter: การต่อวงจรอินพุต                           | เอกสารชุดฝึกอบรม Workshop PLC (Konlatee Design Mechanical LP)            |

| 6.26     | ใบงาน Counter: การต่อวงจรเอาต์พุต                         | เอกสารชุดฝึกอบรม Workshop PLC (Konlatee Design Mechanical LP)            |

| 6.27     | ใบงาน Counter: โปรแกรมแลดเดอร์                          | ภาพหน้าจอจากเอกสารชุดฝึกอบรม Workshop PLC (Konlatee Design Mechanical LP) |

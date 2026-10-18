// ============================================================
// 🎁 GIFT DATA — EDIT HERE to add or change customer content
// ============================================================
// Each key is the URL slug: /gift/aya → id = "aya"
// ============================================================

export interface GiftData {
  name: string;           // Shown in the intro "Make a wish, [name]!"
  senderName?: string;    // Signature at the bottom of the letter (e.g., "Aya ✨")
  envelopeImage: string;  // Path inside /public — the envelope image
  birthdayImage: string;  // Path inside /public — the main birthday card image
  message: string;        // The birthday message (supports \n for line breaks)
  musicUrl?: string;      // Optional: URL to a background music mp3
  accentColor?: string;   // Optional: custom accent color (default: #38bdf8)
}

// ============================================================
// CUSTOMER DATA
// ============================================================
const giftData: Record<string, GiftData> = {

  // ----------------------------------------------------------
  // CUSTOMER: Aya
  // Link: yourdomain.com/gift/aya
  // ----------------------------------------------------------
  aya: {
    name: " KONK",                                     // اسم مستلم الهدية
    senderName: "your love",                                   // التوقيع في آخر الرسالة (اختياري)
    envelopeImage: "/images/envelope-aya.png",           // صورة الظرف
    birthdayImage: "/images/birthday-aya.png",           // صورة الهدية النهائية
    accentColor: "#38bdf8",                              // اللون الأزرق الفاتح المتوافق مع التصميم الجديد
    musicUrl: "",                                        // رابط الموسيقى هنا
    message: `Happy birthday to the sweetest, kindest and most amazing man ever to exist, you matter so much to me pookie🥹❤️. On your special day I just want to let you know how much I love you,care for you, cherish your feelings and appreciate you for your emotional support and thoughtfulness you are genuinely the best coincidence that has happened to me this year and I’m beyond grateful for you.❤️❤️❤️
 You mean the world to me baby and I can’t wait to give you the world. I pray that the Lord grants you with all your heart desires and that you be in good health always. Enjoy your day to the fullest baby even though I’m not there, my heart’s with you and I can’t wait to celebrate you in person in the years to come and spoil you your ahh. I love you so very much my heart!🎂❤️`,
  },

};

export default giftData;

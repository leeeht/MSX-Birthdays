// This endpoint checks for today's birthdays and sends an email
// Trigger this daily via cron-job.org

const birthdayData = [
  { lastName: "Zhao", firstName: "Jenny", birthdate: "2026-01-03" },
  { lastName: "Park", firstName: "Sehhoon", birthdate: "2026-01-09" },
  { lastName: "Lee", firstName: "Huan Ting", birthdate: "2026-01-11" },
  { lastName: "Wong", firstName: "Wilson", birthdate: "2026-01-15" },
  { lastName: "Etzioni", firstName: "Danny", birthdate: "2026-01-26" },
  { lastName: "Garza Amoros", firstName: "Anais", birthdate: "2026-02-01" },
  { lastName: "Yamaguchi", firstName: "Ginta", birthdate: "2026-02-02" },
  { lastName: "Li", firstName: "Ann", birthdate: "2026-02-07" },
  { lastName: "Precht", firstName: "Bernardo", birthdate: "2026-02-09" },
  { lastName: "Vallier", firstName: "Ben", birthdate: "2026-02-13" },
  { lastName: "Wakasa", firstName: "Sho", birthdate: "2026-02-20" },
  { lastName: "McDugald", firstName: "Will", birthdate: "2026-02-23" },
  { lastName: "Li", firstName: "Yao", birthdate: "2026-03-03" },
  { lastName: "Weniger", firstName: "Christian", birthdate: "2026-03-04" },
  { lastName: "Olsen", firstName: "Jessica", birthdate: "2026-03-11" },
  { lastName: "Piasta", firstName: "John", birthdate: "2026-03-16" },
  { lastName: "Li", firstName: "Donghao", birthdate: "2026-03-17" },
  { lastName: "Williamson", firstName: "Daisy", birthdate: "2026-03-18" },
  { lastName: "Lam", firstName: "Rachel", birthdate: "2026-03-28" },
  { lastName: "Contreras Camacho", firstName: "Gabriela", birthdate: "2026-04-02" },
  { lastName: "Prado", firstName: "Fabiana", birthdate: "2026-04-05" },
  { lastName: "White", firstName: "Parker", birthdate: "2026-04-06" },
  { lastName: "Li", firstName: "Lin", birthdate: "2026-04-11" },
  { lastName: "Wang", firstName: "Mona", birthdate: "2026-04-22" },
  { lastName: "Keener", firstName: "Stephanie", birthdate: "2026-04-26" },
  { lastName: "Dong", firstName: "Caroline", birthdate: "2026-04-28" },
  { lastName: "Teng", firstName: "Fei", birthdate: "2026-05-06" },
  { lastName: "Kim", firstName: "Kyungtae", birthdate: "2026-05-14" },
  { lastName: "Yamaura", firstName: "Rusty", birthdate: "2026-05-17" },
  { lastName: "Kwak", firstName: "Harim", birthdate: "2026-05-22" },
  { lastName: "Damiano", firstName: "Daniella", birthdate: "2026-06-02" },
  { lastName: "Pereira", firstName: "Elisa", birthdate: "2026-06-04" },
  { lastName: "Hess-Windisch", firstName: "Eleonore", birthdate: "2026-06-06" },
  { lastName: "Yi", firstName: "Shenghui", birthdate: "2026-06-10" },
  { lastName: "Saravanamuthu", firstName: "Srini", birthdate: "2026-06-11" },
  { lastName: "Bal", firstName: "Kunwar", birthdate: "2026-06-16" },
  { lastName: "Martin", firstName: "Tyler", birthdate: "2026-06-28" },
  { lastName: "Torres Navarrete", firstName: "Fernando", birthdate: "2026-07-06" },
  { lastName: "Su Sivarajah", firstName: "Natasha", birthdate: "2026-07-11" },
  { lastName: "Bhende", firstName: "Shekhar", birthdate: "2026-07-14" },
  { lastName: "Miranda", firstName: "Kristine", birthdate: "2026-07-16" },
  { lastName: "Arenas-Cavalli", firstName: "Jose Tomas", birthdate: "2026-07-18" },
  { lastName: "Tamura", firstName: "Kayo", birthdate: "2026-07-24" },
  { lastName: "Kim", firstName: "Joon", birthdate: "2026-07-27" },
  { lastName: "El Idd", firstName: "Ignacio", birthdate: "2026-07-29" },
  { lastName: "Zhang", firstName: "Da", birthdate: "2026-07-29" },
  { lastName: "Inoue", firstName: "Shota", birthdate: "2026-08-01" },
  { lastName: "Krakauer", firstName: "Talia", birthdate: "2026-08-01" },
  { lastName: "Muniz Telleria", firstName: "Maite", birthdate: "2026-08-02" },
  { lastName: "Makino", firstName: "Megumi", birthdate: "2026-08-03" },
  { lastName: "Goksu Seira Silva-Herzog", firstName: "Nazlican", birthdate: "2026-08-08" },
  { lastName: "Chappell", firstName: "Cameron", birthdate: "2026-08-16" },
  { lastName: "Ismail", firstName: "Ozair", birthdate: "2026-08-21" },
  { lastName: "Bai", firstName: "Jinman", birthdate: "2026-08-26" },
  { lastName: "Nelms", firstName: "Dan", birthdate: "2026-08-27" },
  { lastName: "Watanabe", firstName: "Miki", birthdate: "2026-08-28" },
  { lastName: "Saini", firstName: "Sahaj", birthdate: "2026-09-08" },
  { lastName: "Goel", firstName: "Vishal", birthdate: "2026-09-10" },
  { lastName: "Minelli", firstName: "Gabriel", birthdate: "2026-09-10" },
  { lastName: "Chen", firstName: "Fran", birthdate: "2026-09-16" },
  { lastName: "Remmler", firstName: "Lauro", birthdate: "2026-09-19" },
  { lastName: "Kojima", firstName: "Satoru", birthdate: "2026-09-24" },
  { lastName: "Leow", firstName: "Clara", birthdate: "2026-09-24" },
  { lastName: "Mathur", firstName: "Shobhika", birthdate: "2026-09-24" },
  { lastName: "Rao", firstName: "Sai", birthdate: "2026-09-26" },
  { lastName: "Preciado De La Lama", firstName: "Jesus", birthdate: "2026-09-27" },
  { lastName: "Ito", firstName: "Monta", birthdate: "2026-09-28" },
  { lastName: "Kavalan", firstName: "Anita", birthdate: "2026-10-05" },
  { lastName: "Kimmell", firstName: "Jackie", birthdate: "2026-10-13" },
  { lastName: "Tito", firstName: "Felipe", birthdate: "2026-10-16" },
  { lastName: "Yan", firstName: "Steven", birthdate: "2026-11-01" },
  { lastName: "Andrade", firstName: "Gabriel", birthdate: "2026-11-09" },
  { lastName: "Shin", firstName: "Soyun", birthdate: "2026-11-13" },
  { lastName: "Zhang", firstName: "Neo", birthdate: "2026-11-16" },
  { lastName: "Arumugam", firstName: "Rohit", birthdate: "2026-11-22" },
  { lastName: "Bezerra", firstName: "Eduardo", birthdate: "2026-11-28" },
  { lastName: "Sugimoto", firstName: "Yuki", birthdate: "2026-11-29" },
  { lastName: "Balzi", firstName: "Alessandro", birthdate: "2026-11-30" },
  { lastName: "Coulthurst", firstName: "Martin", birthdate: "2026-11-30" },
  { lastName: "Paterson-Marke", firstName: "Sola", birthdate: "2026-12-18" },
  { lastName: "Hines", firstName: "Woody", birthdate: "2026-12-27" },
];

function getTodaysBirthdays(testDate = null) {
  let todayMMDD;
  
  if (testDate) {
    todayMMDD = testDate;
  } else {
    const today = new Date();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    todayMMDD = `${month}-${day}`;
  }

  return { 
    birthdays: birthdayData.filter(person => {
      const birthdateMMDD = person.birthdate.slice(5);
      return birthdateMMDD === todayMMDD;
    }),
    dateUsed: todayMMDD
  };
}

function formatBirthdayEmail(birthdays) {
  if (birthdays.length === 0) {
    return null;
  }

  const names = birthdays.map(p => `${p.firstName} ${p.lastName}`);
  
  const subject = birthdays.length === 1
    ? `🎂 Today is ${names[0]}'s Birthday!`
    : `🎂 ${birthdays.length} Birthdays Today!`;

  const html = `
    <div style="font-family: Arial, sans-serif; max-width: 500px; margin: 0 auto; padding: 20px;">
      <div style="text-align: center; font-size: 48px; margin-bottom: 20px;">🎂</div>
      <h1 style="text-align: center; color: #1a1a2e; margin-bottom: 10px;">
        ${birthdays.length === 1 ? 'Birthday Alert!' : 'Birthday Alerts!'}
      </h1>
      <p style="text-align: center; color: #666; margin-bottom: 30px;">
        ${birthdays.length === 1 ? 'A classmate has a birthday today' : `${birthdays.length} classmates have birthdays today`}
      </p>
      <div style="background: linear-gradient(135deg, #e94560, #c73659); border-radius: 16px; padding: 30px; text-align: center;">
        ${birthdays.map(p => `
          <div style="color: white; font-size: 24px; font-weight: bold; margin: 10px 0;">
            ${p.firstName} ${p.lastName}
          </div>
        `).join('')}
      </div>
      <p style="text-align: center; color: #999; font-size: 12px; margin-top: 30px;">
        MSX'26 Birthday Reminder
      </p>
    </div>
  `;

  return { subject, html, names };
}

export default async function handler(req, res) {
  const testDate = req.query.date || null;
  
  const { birthdays, dateUsed } = getTodaysBirthdays(testDate);
  
  if (birthdays.length === 0) {
    return res.status(200).json({ 
      message: 'No birthdays today', 
      date: dateUsed,
      testMode: !!testDate
    });
  }

  const email = formatBirthdayEmail(birthdays);
  
  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'MSX Birthdays <onboarding@resend.dev>',
        to: process.env.NOTIFICATION_EMAIL,
        subject: email.subject,
        html: email.html,
      }),
    });

    if (!response.ok) {
      const error = await response.text();
      throw new Error(error);
    }

    const result = await response.json();
    
    return res.status(200).json({ 
      message: 'Birthday email sent!',
      date: dateUsed,
      testMode: !!testDate,
      birthdays: email.names,
      emailId: result.id
    });
  } catch (error) {
    console.error('Email error:', error);
    return res.status(500).json({ error: 'Failed to send email', details: error.message });
  }
}
```

---

## Steps:

1. Go to GitHub → your repo → `api/notify.js`
2. Click the **pencil icon** ✏️ to edit
3. Select all (Ctrl+A / Cmd+A) → Delete
4. Paste the code above
5. Click **Commit changes**

## Test URLs:

After Vercel redeploys (~1 min):
```
https://msx-birthdays.vercel.app/api/notify?date=02-07
```
→ Sends email for Ann Li
```
https://msx-birthdays.vercel.app/api/notify?date=02-09

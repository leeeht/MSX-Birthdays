import { useState, useEffect } from 'react';

const PASSWORD = "nachois18";

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
  { lastName: "Paterson-Marke", firstName: "Söla", birthdate: "2026-12-18" },
  { lastName: "Hines", firstName: "Woody", birthdate: "2026-12-27" },
];

const formatDate = (dateStr) => {
  const date = new Date(dateStr + 'T00:00:00');
  return date.toLocaleDateString('en-US', { month: 'long', day: 'numeric' });
};

function PasswordGate({ onSuccess }) {
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === PASSWORD) {
      localStorage.setItem('msx-auth', 'true');
      onSuccess();
    } else {
      setError(true);
      setTimeout(() => setError(false), 2000);
    }
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
      fontFamily: "'Crimson Pro', Georgia, serif",
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px'
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Crimson+Pro:wght@300;400;600&family=Space+Mono&display=swap');
        
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-10px); }
          75% { transform: translateX(10px); }
        }
      `}</style>

      <div style={{
        background: 'rgba(255, 255, 255, 0.03)',
        backdropFilter: 'blur(10px)',
        borderRadius: '24px',
        padding: '48px 40px',
        border: '1px solid rgba(255, 255, 255, 0.08)',
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
        textAlign: 'center',
        maxWidth: '400px',
        width: '100%'
      }}>
        <div style={{ fontSize: '48px', marginBottom: '16px' }}>🔐</div>
        <h1 style={{
          color: '#ecf0f1',
          fontSize: '24px',
          fontWeight: '300',
          letterSpacing: '2px',
          marginBottom: '8px',
          textTransform: 'uppercase'
        }}>MSX'26 Only</h1>
        <p style={{
          color: '#8892a6',
          fontSize: '14px',
          fontFamily: "'Space Mono', monospace",
          marginBottom: '32px'
        }}>Enter the password to continue</p>

        <form onSubmit={handleSubmit}>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            style={{
              width: '100%',
              padding: '16px 20px',
              fontSize: '18px',
              fontFamily: "'Space Mono', monospace",
              background: 'rgba(255, 255, 255, 0.05)',
              border: error ? '1px solid #e94560' : '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '12px',
              color: '#ecf0f1',
              outline: 'none',
              textAlign: 'center',
              boxSizing: 'border-box',
              animation: error ? 'shake 0.4s ease-out' : 'none'
            }}
          />
          {error && (
            <p style={{
              color: '#e94560',
              fontSize: '13px',
              marginTop: '12px',
              fontFamily: "'Space Mono', monospace"
            }}>Wrong password, try again!</p>
          )}
          <button
            type="submit"
            style={{
              width: '100%',
              marginTop: '20px',
              padding: '16px',
              fontSize: '14px',
              fontFamily: "'Space Mono', monospace",
              fontWeight: '600',
              textTransform: 'uppercase',
              letterSpacing: '2px',
              background: 'linear-gradient(135deg, #e94560 0%, #c73659 100%)',
              border: 'none',
              borderRadius: '12px',
              color: '#fff',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              boxShadow: '0 4px 20px rgba(233, 69, 96, 0.4)'
            }}
          >
            Enter
          </button>
        </form>
      </div>
    </div>
  );
}

function BirthdayLookup() {
  const [searchName, setSearchName] = useState('');
  const [results, setResults] = useState([]);

  useEffect(() => {
    if (searchName.trim().length > 0) {
      const query = searchName.toLowerCase().trim();
      const matches = birthdayData.filter(p => 
        p.firstName.toLowerCase().includes(query) ||
        p.lastName.toLowerCase().includes(query) ||
        `${p.firstName} ${p.lastName}`.toLowerCase().includes(query)
      );
      setResults(matches);
    } else {
      setResults([]);
    }
  }, [searchName]);

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
      fontFamily: "'Crimson Pro', Georgia, serif",
      padding: '40px 20px',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Crimson+Pro:wght@300;400;600&family=Space+Mono&display=swap');
        
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      <div style={{
        position: 'absolute',
        top: '-100px',
        right: '-100px',
        width: '400px',
        height: '400px',
        background: 'radial-gradient(circle, rgba(233, 69, 96, 0.15) 0%, transparent 70%)',
        borderRadius: '50%',
        pointerEvents: 'none'
      }} />

      <div style={{
        maxWidth: '500px',
        margin: '0 auto',
        position: 'relative',
        zIndex: 1
      }}>
        <div style={{
          textAlign: 'center',
          marginBottom: '48px',
          animation: 'slideUp 0.6s ease-out'
        }}>
          <div style={{ fontSize: '48px', marginBottom: '16px' }}>🎂</div>
          <h1 style={{
            color: '#ecf0f1',
            fontSize: '32px',
            fontWeight: '300',
            letterSpacing: '2px',
            marginBottom: '8px',
            textTransform: 'uppercase'
          }}>Birthday Lookup</h1>
          <p style={{
            color: '#8892a6',
            fontSize: '14px',
            fontFamily: "'Space Mono', monospace",
            letterSpacing: '1px'
          }}>GSB Class of 2026 • {birthdayData.length} classmates</p>
        </div>

        <div style={{
          background: 'rgba(255, 255, 255, 0.03)',
          backdropFilter: 'blur(10px)',
          borderRadius: '24px',
          padding: '40px',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
          animation: 'slideUp 0.6s ease-out 0.1s both'
        }}>
          <label style={{
            display: 'block',
            color: '#8892a6',
            fontSize: '11px',
            fontFamily: "'Space Mono', monospace",
            textTransform: 'uppercase',
            letterSpacing: '2px',
            marginBottom: '8px'
          }}>Search by Name</label>
          
          <input
            type="text"
            value={searchName}
            onChange={(e) => setSearchName(e.target.value)}
            placeholder="Type a name..."
            style={{
              width: '100%',
              padding: '16px 20px',
              fontSize: '18px',
              fontFamily: "'Crimson Pro', serif",
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '12px',
              color: '#ecf0f1',
              outline: 'none',
              transition: 'all 0.3s ease',
              boxSizing: 'border-box'
            }}
            onFocus={(e) => {
              e.target.style.borderColor = '#e94560';
              e.target.style.boxShadow = '0 0 0 3px rgba(233, 69, 96, 0.1)';
            }}
            onBlur={(e) => {
              e.target.style.borderColor = 'rgba(255, 255, 255, 0.1)';
              e.target.style.boxShadow = 'none';
            }}
          />

          {searchName.trim() && (
            <div style={{ marginTop: '24px' }}>
              {results.length > 0 ? (
                <div style={{
                  background: 'rgba(0, 0, 0, 0.2)',
                  borderRadius: '12px',
                  overflow: 'hidden'
                }}>
                  {results.map((person, i) => (
                    <div
                      key={i}
                      style={{
                        padding: '16px 20px',
                        borderBottom: i < results.length - 1 ? '1px solid rgba(255, 255, 255, 0.05)' : 'none',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        animation: `slideUp 0.3s ease-out ${i * 0.05}s both`
                      }}
                    >
                      <div>
                        <div style={{ 
                          color: '#ecf0f1', 
                          fontSize: '18px',
                          fontWeight: '500'
                        }}>
                          {person.firstName} {person.lastName}
                        </div>
                      </div>
                      <div style={{
                        background: 'rgba(233, 69, 96, 0.2)',
                        padding: '8px 16px',
                        borderRadius: '20px',
                        color: '#e94560',
                        fontSize: '14px',
                        fontFamily: "'Space Mono', monospace",
                        fontWeight: '600'
                      }}>
                        {formatDate(person.birthdate)}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div style={{
                  padding: '24px',
                  textAlign: 'center',
                  color: '#8892a6',
                  fontSize: '14px'
                }}>
                  No classmates found matching "{searchName}"
                </div>
              )}
            </div>
          )}

          {!searchName.trim() && (
            <p style={{
              marginTop: '16px',
              color: '#5e6d82',
              fontSize: '13px',
              textAlign: 'center'
            }}>
              Start typing to find a classmate's birthday
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default function App() {
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    const isAuth = localStorage.getItem('msx-auth') === 'true';
    setAuthenticated(isAuth);
  }, []);

  if (!authenticated) {
    return <PasswordGate onSuccess={() => setAuthenticated(true)} />;
  }

  return <BirthdayLookup />;
}

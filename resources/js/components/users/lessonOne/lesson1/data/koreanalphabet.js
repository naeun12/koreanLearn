import Hangul from '../models/hangul'

export default {
  vowels: [
    new Hangul('ㅏ', 'a', 'Like "ah" in father.', 'FATHER'),
    new Hangul('ㅑ', 'ya', 'Like "yah" in yard.', 'YARD'),
    new Hangul('ㅓ', 'eo', 'Like "u" in up.', 'UP'),
    new Hangul('ㅕ', 'yeo', 'Like "yo" in young.', 'YOUNG'),
    new Hangul('ㅗ', 'o', 'Like "o" in home.', 'HOME'),
    new Hangul('ㅛ', 'yo', 'Like "yo" in yoga.', 'YOGA'),
    new Hangul('ㅜ', 'u', 'Like "oo" in moon.', 'MOON'),
    new Hangul('ㅠ', 'yu', 'Like "yu" in youth.', 'YOUTH'),
    new Hangul('ㅡ', 'eu', 'Like "u" in pull.', 'PULL'),
    new Hangul('ㅣ', 'i', 'Like "ee" in meet.', 'MEET')
  ],

  consonants: [
    new Hangul('ㄱ', 'g/k', 'Soft k or g sound.', 'GUN', '/hangulalphabetimages/g.png', 'Draw step by step...'),
    new Hangul('ㄴ', 'n', 'Like n in nose.', 'NOSE', '/hangulalphabetimages/n.png'),
    new Hangul('ㄷ', 'd/t', 'Soft t or d sound.', 'DOG', '/hangulalphabetimages/d.png'),
    new Hangul('ㄹ', 'r/l', 'Between r and l.', 'RATTLE', '/hangulalphabetimages/r.png'),
    new Hangul('ㅁ', 'm', 'Like m in mouth.', 'MOUTH', '/hangulalphabetimages/m.png'),
    new Hangul('ㅂ', 'b/p', 'Soft b or p sound.', 'BUCKET', '/hangulalphabetimages/b.png'),
    new Hangul('ㅇ', 'ng', 'Silent prefix; ng suffix.', 'SING', '/hangulalphabetimages/ng.png'),
    new Hangul('ㅅ', 's', 'Like s in soul.', 'SOUL', '/hangulalphabetimages/s.png'),
    new Hangul('ㅈ', 'j', 'Like j in jump.', 'JUMP', '/hangulalphabetimages/j.png'),
    new Hangul('ㅊ', 'ch', 'Strong ch sound.', 'CHAIR', '/hangulalphabetimages/ch.png'),
    new Hangul('ㅋ', 'k', 'Strong aspirated k.', 'KITE', '/hangulalphabetimages/k.png'),
    new Hangul('ㅌ', 't', 'Strong aspirated t.', 'TOP', '/hangulalphabetimages/t.png'),
    new Hangul('ㅍ', 'p', 'Strong aspirated p.', 'PEN', '/hangulalphabetimages/p.png'),
    new Hangul('ㅎ', 'h', 'Soft h sound.', 'HOPE', '/hangulalphabetimages/h.png')
  ],

  doubleConsonants: [
    new Hangul('ㄲ', 'kk', 'Tense k sound.', 'SKILL'),
    new Hangul('ㄸ', 'tt', 'Tense t sound.', 'STOP'),
    new Hangul('ㅃ', 'pp', 'Tense p sound.', 'SPY'),
    new Hangul('ㅆ', 'ss', 'Tense s sound.', 'SEA'),
    new Hangul('ㅉ', 'jj', 'Tense j sound.', 'MESSAGE')
  ],

  otherConsonants: [
    new Hangul('ㅐ', 'ae', 'Like a in care.', 'CARE'),
    new Hangul('ㅒ', 'yae', 'Like ya in yankee.', 'YANKEE'),
    new Hangul('ㅔ', 'e', 'Like e in bed.', 'BED'),
    new Hangul('ㅖ', 'ye', 'Like ye in yes.', 'YES'),
    new Hangul('ㅘ', 'wa', 'Like wa in water.', 'WATER'),
    new Hangul('ㅙ', 'wae', 'Like wa in wax.', 'WAX'),
    new Hangul('ㅚ', 'oe', 'Like we in wet.', 'WET'),
    new Hangul('ㅝ', 'wo', 'Like wo in won.', 'WON'),
    new Hangul('ㅞ', 'we', 'Like we in wedding.', 'WEDDING'),
    new Hangul('ㅟ', 'wi', 'Like wee in week.', 'WEEK'),
    new Hangul('ㅢ', 'ui', 'Combined eu + i.', 'UI')
  ]
}
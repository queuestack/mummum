import React from 'react'

class Converter extends React.Component {
    toKorChars = (text) => {
        const SPACE = 32
        const KOR_UNICODE_START = 0xAC00
        const NUM_JUNG = 21
        const NUM_JONG = 28


        const cCho = [ 'ㄱ', 'ㄲ', 'ㄴ', 'ㄷ', 'ㄸ', 'ㄹ', 'ㅁ', 'ㅂ', 'ㅃ', 'ㅅ', 'ㅆ', 'ㅇ', 'ㅈ', 'ㅉ', 'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ' ]
        const cJung = [ 'ㅏ', 'ㅐ', 'ㅑ', 'ㅒ', 'ㅓ', 'ㅔ', 'ㅕ', 'ㅖ', 'ㅗ', 'ㅘ', 'ㅙ', 'ㅚ', 'ㅛ', 'ㅜ', 'ㅝ', 'ㅞ', 'ㅟ', 'ㅠ', 'ㅡ', 'ㅢ', 'ㅣ' ]
        const cJong = [ '', 'ㄱ', 'ㄲ', 'ㄳ', 'ㄴ', 'ㄵ', 'ㄶ', 'ㄷ', 'ㄹ', 'ㄺ', 'ㄻ', 'ㄼ', 'ㄽ', 'ㄾ', 'ㄿ', 'ㅀ', 'ㅁ', 'ㅂ', 'ㅄ', 'ㅅ', 'ㅆ', 'ㅇ', 'ㅈ', 'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ' ]
        let cho, jung, jong

        const count = text.length
        let chars = [], cCode

        for (let i = 0; i < count; i++) {
            cCode = text.charCodeAt(i)

            if (cCode === SPACE) {
                continue
            }

            if (cCode < 0xAC00 || cCode > 0xD7A3) {
                chars.push(text.charAt(i));
                continue;
            }

            cCode = text.charCodeAt(i) - KOR_UNICODE_START

            jong = cCode % NUM_JONG
            jung = ((cCode - jong) / NUM_JONG ) % NUM_JUNG
            cho = (((cCode - jong) / NUM_JONG ) - jung ) / NUM_JUNG

            chars.push(cCho[cho], cJung[jung])
            if (cJong[jong] !== '') {
                chars.push(cJong[jong])
            }
        }

        console.log(chars)
        return chars
    }
    render() {
        return (
            <div>
                {this.toKorChars('안녕하세요')}
            </div>
        )
    }
}

export default Converter;
const b1 = {
    modules: [
        {
            'Sem. von': 1,
            'Sem. bis': 1,
            SWS: 4,
            Art: 'SU',
            'Zug / Gruppe': '1. Zug',
            TN: 44,
            'SWS-Dozent': 4,
            code: 'B1',
            name: ' Informatik 1',
            teacher: [Object],
            semester: 1
        },
        {
            'Sem. von': 1,
            'Sem. bis': 1,
            SWS: 2,
            Art: 'Ü',
            'Zug / Gruppe': '1. Zug 1. Gruppe',
            TN: 22,
            'SWS-Dozent': 2,
            'Vergütung': 37.5,
            code: 'B1',
            name: ' Informatik 1',
            teacher: [Object],
            semester: 1
        },
        {
            'Sem. von': 1,
            'Sem. bis': 1,
            SWS: 2,
            Art: 'Ü',
            'Zug / Gruppe': '1. Zug 2. Gruppe',
            TN: 22,
            'SWS-Dozent': 2,
            'Vergütung': 37.5,
            code: 'B1',
            name: ' Informatik 1',
            teacher: [Object],
            semester: 1
        },
        {
            'Sem. von': 1,
            'Sem. bis': 1,
            'Stg. Nummer': 919,
            'Stg. Name': 'Internationale Medieninformatik',
            'B / M': 'B',
            StO: 'StO 2011',
            Modulverantwortlicher: 'Debora Weber-Wulff',
            'Anzahl Prüfungstermine': 2,
            SWS: 4,
            Art: 'SU',
            'Zug / Gruppe': '1. Zug',
            TN: 44,
            code: 'B1',
            name: ' Informatik 1',
            teacher: [Object],
            semester: 1
        },
        {
            'Sem. von': 1,
            'Sem. bis': 1,
            'Stg. Nummer': 919,
            'Stg. Name': 'Internationale Medieninformatik',
            'B / M': 'B',
            StO: 'StO 2011',
            Modulverantwortlicher: 'Debora Weber-Wulff',
            'Anzahl Prüfungstermine': 2,
            SWS: 2,
            Art: 'Ü',
            'Zug / Gruppe': '1. Zug 1. Gruppe',
            TN: 22,
            code: 'B1',
            name: ' Informatik 1',
            teacher: [Object],
            semester: 1
        },
        {
            'Sem. von': 1,
            'Sem. bis': 1,
            'Stg. Nummer': 919,
            'Stg. Name': 'Internationale Medieninformatik',
            'B / M': 'B',
            StO: 'StO 2011',
            Modulverantwortlicher: 'Debora Weber-Wulff',
            'Anzahl Prüfungstermine': 2,
            SWS: 2,
            Art: 'Ü',
            'Zug / Gruppe': '1. Zug 2. Gruppe',
            TN: 22,
            code: 'B1',
            name: ' Informatik 1',
            teacher: [Object],
            semester: 1
        }
    ]
}
test('finds sem von',() => {
    const fieldName = 'Sem. von'

    const first = b1.modules.find(m => { return !(m[fieldName] === undefined)})
    expect(first[fieldName]).toBe(1)
})
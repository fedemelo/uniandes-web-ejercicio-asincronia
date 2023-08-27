const URL = "https://gist.githubusercontent.com/josejbocanegra/b1873c6b7e732144355bb1627b6895ed/raw/d91df4c8093c23c41dce6292d5c1ffce0f01a68b/newDatalog.json"


function fetchDataAsJSON(url, processData) {
    return fetch(url).then(
        response => response.json()).then(
            data => processData(data)
        )
}

function matthewsCorrelationCoefficient(TP, TN, FP, FN) {
    return (TP * TN - FP * FN) / Math.sqrt((TP + FP) * (TP + FN) * (TN + FP) * (TN + FN))
}


function processData(data) {
    let events = data.reduce(
        (evs, day) => [...evs, ...day.events], []).filter(
            (value, index, self) => self.indexOf(value) === index
        ).map(
            event => ({
                event: event,
                TP: 0,
                TN: 0,
                FP: 0,
                FN: 0
            })
        )

    data.map(day => {
        events.map(event => {
            if (day.events.includes(event.event)) {
                if (day.squirrel) {
                    event.TP++
                } else {
                    event.FP++
                }
            } else {
                if (day.squirrel) {
                    event.FN++
                } else {
                    event.TN++
                }
            }
        })
    })

    console.log(events.map(ev => ({

        event: ev.event,
        mcc: matthewsCorrelationCoefficient(ev.TP, ev.TN, ev.FP, ev.FN)

    })).sort((a, b) => b.mcc - a.mcc)
    )
}

function main() {
    fetchDataAsJSON(URL, processData)
}

main()
import React from 'react';
import {
    BarChart,
    Bar,
    XAxis,
    ResponsiveContainer,
    LabelList,
    Cell
} from 'recharts';
import './App.css';

const VERTICAL_SPACE = 2;
const HORIZONTAL_SPACE = 6;

const renderYearTick = (start) => (tickProps) => {
    const {
        x,
        y,
        payload,
        visibleTicksCount
    } = tickProps;
    const {
        value,
        offset,
        index
    } = payload;
    console.log(tickProps);

    const date = new Date(value);
    const month = date.getMonth();
    const year = date.getFullYear();

    let line = undefined;
    let label = undefined;
    let dx = 0;
    if (index === 0) {
        dx = Math.floor(offset * (24 - month * 2) - HORIZONTAL_SPACE * 2);
        if (visibleTicksCount < (12 - month)) {
            dx = Math.floor(offset * visibleTicksCount * 2 - HORIZONTAL_SPACE * 2);
        }
        line = < path d = {
            `M${x - offset + HORIZONTAL_SPACE},${y - 4}h${dx}`
        }
        stroke = "#666" / > ;
    }
    if (month === 0) {
        dx = Math.floor(offset * 24 - HORIZONTAL_SPACE * 2);
        if ((index + 12) >= visibleTicksCount) {
            dx = Math.floor(offset * (visibleTicksCount - index) * 2 - HORIZONTAL_SPACE * 2)
        }
        line = < path d = {
            `M${x - offset + HORIZONTAL_SPACE},${y - 4}h${dx}`
        }
        stroke = "#666" / > ;
    }

    let first = 12 - start;
    if (index < first) {
        if (Math.floor((11 - start) / 2) === index) {
            label = < text x = {
                x + offset
            }
            y = {
                y + 16
            }
            textAnchor = "end"
            style = {
                {
                    fontSize: 18,
                    fontWeight: 600,
                    fill: 'white'
                }
            } > {
                year
            } < /text>;
        }
    }

    let last = (visibleTicksCount + start);
    last = visibleTicksCount - last % 12;
    if (index >= last) {
        if (month === Math.floor((visibleTicksCount - last) / 2)) {
            label = < text x = {
                x + offset
            }
            y = {
                y + 16
            }
            textAnchor = "end"
            style = {
                {
                    fontSize: 18,
                    fontWeight: 600,
                    fill: 'white'
                }
            } > {
                year
            } < /text>;
        }
    }

    if (index < last && index >= first) {
        if (month === 5) {
            label = < text x = {
                x + offset
            }
            y = {
                y + 16
            }
            textAnchor = "middle"
            style = {
                {
                    fontSize: 18,
                    fontWeight: 600,
                    fill: 'white'
                }
            } > {
                year
            } < /text>;
        }
    }

    return ( <
        > {
            line
        } {
            label
        } <
        />
    )
};


const CustomChart = () => {

    const data = [
        // { value: 12.6, month: 'Jan', year: 2017 },
        // { value: 3.29, month: 'Feb', year: 2017 },
        // { value: 7.89, month: 'Mar', year: 2017 },
        {
            value: 19.26,
            month: 'Apr',
            year: 2017
        },
        {
            value: 27.25,
            month: 'May',
            year: 2017
        },
        {
            value: 21.36,
            month: 'Jun',
            year: 2017
        },
        {
            value: -6.71,
            month: 'Jul',
            year: 2017
        },
        {
            value: 15.23,
            month: 'Aug',
            year: 2017
        },
        {
            value: 8.23,
            month: 'Sep',
            year: 2017
        },
        {
            value: 19.77,
            month: 'Oct',
            year: 2017
        },
        {
            value: -4.96,
            month: 'Nov',
            year: 2017
        },
        {
            value: 21.48,
            month: 'Dec',
            year: 2017
        },
        {
            value: 0.8,
            month: 'Jan',
            year: 2018
        },
        {
            value: 3.29,
            month: 'Feb',
            year: 2018
        },
        {
            value: 7.89,
            month: 'Mar',
            year: 2018
        },
        {
            value: 19.26,
            month: 'Apr',
            year: 2018
        },
        {
            value: 27.25,
            month: 'May',
            year: 2018
        },
        {
            value: 21.36,
            month: 'Jun',
            year: 2018
        },
        {
            value: -6.71,
            month: 'Jul',
            year: 2018
        },
        {
            value: 15.23,
            month: 'Aug',
            year: 2018
        },
        {
            value: 8.23,
            month: 'Sep',
            year: 2018
        },
        {
            value: 19.77,
            month: 'Oct',
            year: 2018
        },
        {
            value: -4.96,
            month: 'Nov',
            year: 2018
        },
        {
            value: 21.48,
            month: 'Dec',
            year: 2018
        },
        {
            value: -3.2,
            month: 'Jan',
            year: 2019
        },
        {
            value: 3.29,
            month: 'Feb',
            year: 2019
        },
        {
            value: 7.89,
            month: 'Mar',
            year: 2019
        },
        {
            value: 19.26,
            month: 'Apr',
            year: 2019
        },
        {
            value: 27.25,
            month: 'May',
            year: 2019
        },
    ]

    let min = 0;
    for (let item of data) {
        if (min > item.value) min = item.value;
    }
    for (let item of data) {
        item.offset = item.value > 0 ? -min + VERTICAL_SPACE : item.value - min + VERTICAL_SPACE;
        item.real = (item.value >= 0) ? item.value : -item.value;
        item.date = item.year + '-' + item.month;
        item.upper = VERTICAL_SPACE;
    }
    const start = (new Date(data[0].date)).getMonth();

    return ( <
        ResponsiveContainer width = '100%'
        minHeight = 'calc(100vh - 240px)'
        height = '100%' >
        <
        BarChart stackOffset = 'none'
        style = {
            {
                backgroundColor: '#333',
                color: 'white'
            }
        }
        data = {
            data
        }
        margin = {
            {
                top: 15,
                right: 30,
                left: 20,
                bottom: 5
            }
        } >
        {
            /* <CartesianGrid strokeDasharray="3 3" /> */ } <
        XAxis dataKey = "date"
        minTickGap = {
            10
        }
        tickLine = {
            false
        }
        interval = {
            0
        }
        axisLine = {
            false
        }
        tick = {
            renderYearTick(start)
        }
        /> <
        Bar dataKey = 'offset'
        fill = '#333'
        opacity = {
            0
        }
        stackId = 'a' / >
        <
        Bar dataKey = "real"
        radius = {
            5
        }
        stackId = 'a' > {
            data.map((entry, index) => ( <
                Cell key = {
                    `cell-${index}`
                }
                fill = {
                    entry.value < 0 ? 'red' : 'green'
                }
                />
            ))
        } <
        LabelList dataKey = "month"
        position = "bottom"
        className = 'white-text' / >
        <
        LabelList dataKey = "value"
        position = "top"
        className = 'white-text' / >
        <
        /Bar> <
        Bar dataKey = 'upper'
        fill = '#333'
        opacity = {
            0
        }
        stackId = 'a' / >
        <
        /BarChart> <
        /ResponsiveContainer>
    )
}

export default CustomChart;
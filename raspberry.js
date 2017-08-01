[
    {
        "id": "29e4e499.70bc6c",
        "type": "tab",
        "label": "Raspi"
    },
    {
        "id": "3ff9402f.080b",
        "type": "exec",
        "z": "29e4e499.70bc6c",
        "command": "vcgencmd",
        "addpay": false,
        "append": "measure_temp",
        "useSpawn": "",
        "timer": "",
        "name": "GPU Temp",
        "x": 334.5,
        "y": 32.5,
        "wires": [
            [
                "a6389a77.2b19e8"
            ],
            [],
            []
        ]
    },
    {
        "id": "4adc3c15.b20474",
        "type": "inject",
        "z": "29e4e499.70bc6c",
        "name": "",
        "topic": "",
        "payload": "true",
        "payloadType": "bool",
        "repeat": "60",
        "crontab": "",
        "once": false,
        "x": 104.5,
        "y": 87,
        "wires": [
            [
                "3ff9402f.080b",
                "8d873493.c456e8",
                "e1e4ee4.84c011"
            ]
        ]
    },
    {
        "id": "8d873493.c456e8",
        "type": "exec",
        "z": "29e4e499.70bc6c",
        "command": "uptime",
        "addpay": false,
        "append": "-p",
        "useSpawn": "",
        "timer": "",
        "name": "",
        "x": 315.5,
        "y": 85.5,
        "wires": [
            [
                "733f3c2a.72c004"
            ],
            [],
            []
        ]
    },
    {
        "id": "a6389a77.2b19e8",
        "type": "function",
        "z": "29e4e499.70bc6c",
        "name": "CPU Temp Function",
        "func": "//msg.payload = {'d':{'temp': parseFloat(msg.payload.replace(\"temp=\",\"\").replace(\"'C\\n\",\"\"))}};\nmsg.payload = parseFloat(msg.payload.replace(\"temp=\",\"\").replace(\"'C\\n\",\"\"));\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 545.1903991699219,
        "y": 26.559356689453125,
        "wires": [
            [
                "627d5d00.067304"
            ]
        ]
    },
    {
        "id": "e1e4ee4.84c011",
        "type": "exec",
        "z": "29e4e499.70bc6c",
        "command": "cat",
        "addpay": false,
        "append": "/proc/loadavg",
        "useSpawn": "",
        "timer": "",
        "name": "",
        "x": 316,
        "y": 139.5,
        "wires": [
            [
                "3f7c476.6743ab8"
            ],
            [],
            []
        ]
    },
    {
        "id": "3f7c476.6743ab8",
        "type": "function",
        "z": "29e4e499.70bc6c",
        "name": "Load Function",
        "func": "var msg2 = {};\nvar msg3 = {};\nvar msg4 = {};\nmsg.payload = msg.payload.split(\" \");\nmsg2.payload = parseFloat(msg.payload[0]);\nmsg3.payload = parseFloat(msg.payload[1]);\nmsg4.payload = parseFloat(msg.payload[2]);\nreturn [ msg2,msg3,msg4];\n",
        "outputs": "3",
        "noerr": 0,
        "x": 528,
        "y": 143,
        "wires": [
            [
                "4a7cb5ff.93fa4c"
            ],
            [
                "37ab6a67.bc78e6"
            ],
            [
                "437626a7.5736d8"
            ]
        ]
    },
    {
        "id": "627d5d00.067304",
        "type": "ui_gauge",
        "z": "29e4e499.70bc6c",
        "name": "",
        "group": "157e923a.4d6ebe",
        "order": 1,
        "width": "3",
        "height": "3",
        "gtype": "gage",
        "title": "CPU Temperatur",
        "label": "°C",
        "format": "{{value}}",
        "min": "40",
        "max": "80",
        "colors": [
            "#00b500",
            "#e6e600",
            "#ca3838"
        ],
        "seg1": "50",
        "seg2": "70",
        "x": 785,
        "y": 27,
        "wires": []
    },
    {
        "id": "4a7cb5ff.93fa4c",
        "type": "ui_gauge",
        "z": "29e4e499.70bc6c",
        "name": "",
        "group": "157e923a.4d6ebe",
        "order": 3,
        "width": "3",
        "height": "3",
        "gtype": "gage",
        "title": "Load",
        "label": "1min",
        "format": "{{value}}",
        "min": 0,
        "max": "5",
        "colors": [
            "#00b500",
            "#e6e600",
            "#ca3838"
        ],
        "seg1": "2",
        "seg2": "3",
        "x": 741,
        "y": 105,
        "wires": []
    },
    {
        "id": "37ab6a67.bc78e6",
        "type": "ui_gauge",
        "z": "29e4e499.70bc6c",
        "name": "",
        "group": "157e923a.4d6ebe",
        "order": 4,
        "width": "3",
        "height": "3",
        "gtype": "gage",
        "title": "Load",
        "label": "5min",
        "format": "{{value}}",
        "min": 0,
        "max": "5",
        "colors": [
            "#00b500",
            "#e6e600",
            "#ca3838"
        ],
        "seg1": "2",
        "seg2": "3",
        "x": 740,
        "y": 147,
        "wires": []
    },
    {
        "id": "437626a7.5736d8",
        "type": "ui_gauge",
        "z": "29e4e499.70bc6c",
        "name": "",
        "group": "157e923a.4d6ebe",
        "order": 5,
        "width": "3",
        "height": "3",
        "gtype": "gage",
        "title": "Load",
        "label": "15min",
        "format": "{{value}}",
        "min": 0,
        "max": "5",
        "colors": [
            "#00b500",
            "#e6e600",
            "#ca3838"
        ],
        "seg1": "2",
        "seg2": "3",
        "x": 737,
        "y": 187,
        "wires": []
    },
    {
        "id": "733f3c2a.72c004",
        "type": "ui_text",
        "z": "29e4e499.70bc6c",
        "group": "157e923a.4d6ebe",
        "order": 2,
        "width": "6",
        "height": "3",
        "name": "",
        "label": "Uptime",
        "format": "{{msg.payload}}",
        "layout": "col-center",
        "x": 752,
        "y": 64,
        "wires": []
    },
    {
        "id": "157e923a.4d6ebe",
        "type": "ui_group",
        "z": "",
        "name": "192.168.11.1",
        "tab": "38a2b6e3.f05c0a",
        "order": 1,
        "disp": true,
        "width": "9"
    },
    {
        "id": "38a2b6e3.f05c0a",
        "type": "ui_tab",
        "z": "",
        "name": "Raspberry Pi",
        "icon": "dashboard",
        "order": 6
    }
]

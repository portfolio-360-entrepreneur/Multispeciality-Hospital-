var APP_DATA = {
  "scenes": [
    {
      "id": "0-hospital-view",
      "name": "HOSPITAL VIEW",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -0.008055365778435686,
        "pitch": -0.10338662547219712,
        "fov": 1.3365071038314758
      },
      "linkHotspots": [
        {
          "yaw": -0.03697343452046198,
          "pitch": 0.014661805247325077,
          "rotation": 0,
          "target": "1-main-entry"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-main-entry",
      "name": "MAIN ENTRY",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.3365071038314758
      },
      "linkHotspots": [
        {
          "yaw": 3.125411804986891,
          "pitch": 0.1427144428600684,
          "rotation": 0,
          "target": "0-hospital-view"
        },
        {
          "yaw": -0.011047378351976889,
          "pitch": 0.12349985539854558,
          "rotation": 0,
          "target": "2-waiting-area"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-waiting-area",
      "name": "WAITING AREA",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -0.06290072580183015,
        "pitch": 0.1395785546628563,
        "fov": 1.3365071038314758
      },
      "linkHotspots": [
        {
          "yaw": -3.139017554864548,
          "pitch": 0.232617757053184,
          "rotation": 0,
          "target": "1-main-entry"
        },
        {
          "yaw": 1.5900914343848846,
          "pitch": 0.23089491411654173,
          "rotation": 0,
          "target": "3-pharmacy-counter"
        },
        {
          "yaw": -0.006210897598725396,
          "pitch": 0.3189819982315818,
          "rotation": 0,
          "target": "5-alley"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-pharmacy-counter",
      "name": "PHARMACY COUNTER",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.1127751208980996,
        "pitch": -0.026316595574741086,
        "fov": 1.3365071038314758
      },
      "linkHotspots": [
        {
          "yaw": -3.0613477230555155,
          "pitch": 0.3043537809699224,
          "rotation": 0,
          "target": "2-waiting-area"
        },
        {
          "yaw": 0.14169050684587958,
          "pitch": 0.2652946925273518,
          "rotation": 0,
          "target": "4-pharmacy"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-pharmacy",
      "name": "PHARMACY",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -0.47283897221972104,
        "pitch": 0.06682625964383426,
        "fov": 1.3365071038314758
      },
      "linkHotspots": [
        {
          "yaw": 2.9434751275022197,
          "pitch": 0.3610473774293652,
          "rotation": 0,
          "target": "3-pharmacy-counter"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-alley",
      "name": "ALLEY",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -0.10069207223045318,
        "pitch": 0.020677325094439425,
        "fov": 1.3365071038314758
      },
      "linkHotspots": [
        {
          "yaw": 3.132139968105278,
          "pitch": 0.2557707048100095,
          "rotation": 0,
          "target": "2-waiting-area"
        },
        {
          "yaw": -1.5736675318482458,
          "pitch": 0.253976533725881,
          "rotation": 0,
          "target": "6-reception"
        },
        {
          "yaw": 1.476773504095501,
          "pitch": 0.16629379526485977,
          "rotation": 0,
          "target": "7-opd-1"
        },
        {
          "yaw": 0.11673543950119836,
          "pitch": 0.23471091729952498,
          "rotation": 0,
          "target": "9-staircase-"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-reception",
      "name": "RECEPTION",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 1.6035363685835264,
        "pitch": 0.0836085656704384,
        "fov": 1.3365071038314758
      },
      "linkHotspots": [
        {
          "yaw": -3.0600295214857542,
          "pitch": 0.24020523154676,
          "rotation": 0,
          "target": "5-alley"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-opd-1",
      "name": "OPD 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.3396679236573714,
        "pitch": -0.0639117321100855,
        "fov": 1.3365071038314758
      },
      "linkHotspots": [
        {
          "yaw": -2.851860101772358,
          "pitch": 0.30039814037831825,
          "rotation": 0,
          "target": "5-alley"
        },
        {
          "yaw": 0.4299123676985168,
          "pitch": 0.25341262805004305,
          "rotation": 0,
          "target": "8-opd-cabin"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-opd-cabin",
      "name": "OPD CABIN",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -0.060415243338267643,
        "pitch": -0.011278540960603323,
        "fov": 1.3365071038314758
      },
      "linkHotspots": [
        {
          "yaw": -3.10221163312605,
          "pitch": 0.2027817655140023,
          "rotation": 0,
          "target": "7-opd-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-staircase-",
      "name": "STAIRCASE ",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.9653813361209718,
          "pitch": 0.2815758649539717,
          "rotation": 0,
          "target": "5-alley"
        },
        {
          "yaw": -0.25391008054066333,
          "pitch": 0.20921426161125467,
          "rotation": 0,
          "target": "10-opd-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-opd-2",
      "name": "OPD 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 3.0925263971188324,
          "pitch": 0.2138607196455382,
          "rotation": 0,
          "target": "9-staircase-"
        },
        {
          "yaw": 1.6364938929658406,
          "pitch": 0.2421848667381603,
          "rotation": 0,
          "target": "11-opd-2-cabin"
        },
        {
          "yaw": -0.014000213125154204,
          "pitch": 0.17406751422363342,
          "rotation": 0,
          "target": "14-casualty"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "11-opd-2-cabin",
      "name": "OPD 2 CABIN",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -3.09840792336872,
          "pitch": 0.2933819715897279,
          "rotation": 0,
          "target": "10-opd-2"
        },
        {
          "yaw": -1.3893004651755483,
          "pitch": 0.2716131345384518,
          "rotation": 0,
          "target": "12-doctor-cabin"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "12-doctor-cabin",
      "name": "DOCTOR CABIN",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.4837355363260194,
          "pitch": 0.23393676019712828,
          "rotation": 0,
          "target": "11-opd-2-cabin"
        },
        {
          "yaw": -0.036461774404177305,
          "pitch": 0.22233063783379237,
          "rotation": 0,
          "target": "13-doctor-desk"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "13-doctor-desk",
      "name": "DOCTOR DESK",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 3.133841987423086,
          "pitch": 0.3086495031541787,
          "rotation": 0,
          "target": "12-doctor-cabin"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "14-casualty",
      "name": "CASUALTY",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 3.134497507641534,
          "pitch": 0.14089530190372734,
          "rotation": 0,
          "target": "10-opd-2"
        },
        {
          "yaw": -1.5917786726627128,
          "pitch": 0.14140720676294016,
          "rotation": 0,
          "target": "15-casualty-bed"
        },
        {
          "yaw": -0.01572407798412634,
          "pitch": 0.07696387152196138,
          "rotation": 0,
          "target": "16-x-ray-sonography"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "15-casualty-bed",
      "name": "CASUALTY BED",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -3.066288281885086,
          "pitch": 0.24502666687790864,
          "rotation": 0,
          "target": "14-casualty"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "16-x-ray-sonography",
      "name": "X-RAY SONOGRAPHY",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 3.112924737481599,
          "pitch": 0.11472624066648862,
          "rotation": 0,
          "target": "14-casualty"
        },
        {
          "yaw": 1.5917546677697088,
          "pitch": 0.12830899916614058,
          "rotation": 0,
          "target": "17-x-ray-machine"
        },
        {
          "yaw": -0.03377322389349402,
          "pitch": 0.0760363356985323,
          "rotation": 0,
          "target": "18-lobby-"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "17-x-ray-machine",
      "name": "X-RAY MACHINE",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -3.139627082973673,
          "pitch": 0.15808281552792636,
          "rotation": 0,
          "target": "16-x-ray-sonography"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "18-lobby-",
      "name": "LOBBY ",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 3.1366626100008244,
          "pitch": 0.12118274190045142,
          "rotation": 0,
          "target": "16-x-ray-sonography"
        },
        {
          "yaw": 1.5571031361389451,
          "pitch": 0.18466908231771484,
          "rotation": 0,
          "target": "19-pathology-lab"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "19-pathology-lab",
      "name": "PATHOLOGY LAB",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 3.1340630279018953,
          "pitch": 0.24379619235919492,
          "rotation": 0,
          "target": "18-lobby-"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "20-second-floor-",
      "name": "SECOND FLOOR ",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.369062459599924,
          "pitch": 0.22547542676369758,
          "rotation": 0,
          "target": "21-icu"
        },
        {
          "yaw": 0.11237814837455495,
          "pitch": 0.13249539339430605,
          "rotation": 0,
          "target": "23-icu-waiting-area"
        },
        {
          "yaw": -1.5756135201067458,
          "pitch": 0.1674081194920678,
          "rotation": 0,
          "target": "24-operation-theatre--"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "21-icu",
      "name": "ICU",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.9200089849128155,
          "pitch": 0.3361251490398711,
          "rotation": 0,
          "target": "20-second-floor-"
        },
        {
          "yaw": -1.515999076122494,
          "pitch": 0.1372095544858567,
          "rotation": 0,
          "target": "22-icu-bed"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "22-icu-bed",
      "name": "ICU BED",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -3.1073345078710197,
          "pitch": 0.15382160960468028,
          "rotation": 0,
          "target": "21-icu"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "23-icu-waiting-area",
      "name": "ICU WAITING AREA",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -3.1323313765910754,
          "pitch": 0.260496453625624,
          "rotation": 0,
          "target": "20-second-floor-"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "24-operation-theatre--",
      "name": "OPERATION THEATRE  ",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 3.1015352458139676,
          "pitch": 0.122879718998675,
          "rotation": 0,
          "target": "20-second-floor-"
        },
        {
          "yaw": 0.024483055404299847,
          "pitch": 0.1820426544387601,
          "rotation": 0,
          "target": "27-o-t-lobby"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "25-dr-lounge",
      "name": "DR. LOUNGE",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.0775643534695476,
          "pitch": 0.16454130467983674,
          "rotation": 0,
          "target": "26-lounge-bed"
        },
        {
          "yaw": -3.029375434975968,
          "pitch": 0.25296855739424906,
          "rotation": 7.0685834705770345,
          "target": "27-o-t-lobby"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "26-lounge-bed",
      "name": "LOUNGE BED",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -0.3638321541142737,
        "pitch": 0.03571537970857719,
        "fov": 1.3365071038314758
      },
      "linkHotspots": [
        {
          "yaw": 2.872869505481603,
          "pitch": 0.218658014687648,
          "rotation": 0,
          "target": "25-dr-lounge"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "27-o-t-lobby",
      "name": "O. T. LOBBY",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.6476267254465409,
          "pitch": 0.24615472899440682,
          "rotation": 0,
          "target": "28-dileivery-room"
        },
        {
          "yaw": 2.729522977716748,
          "pitch": 0.1655732437729469,
          "rotation": 5.497787143782138,
          "target": "25-dr-lounge"
        },
        {
          "yaw": 0.0007260371110611175,
          "pitch": 0.1496461332626815,
          "rotation": 0,
          "target": "24-operation-theatre--"
        },
        {
          "yaw": -3.103713570070946,
          "pitch": 0.07475889666074309,
          "rotation": 0,
          "target": "30-ot-sanitization-"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "28-dileivery-room",
      "name": "DILEIVERY ROOM",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 3.023042733141706,
          "pitch": 0.2892199548111307,
          "rotation": 0,
          "target": "27-o-t-lobby"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "29-ot-1",
      "name": "O.T. 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 3.002884408586274,
          "pitch": 0.24551430939690633,
          "rotation": 0.7853981633974483,
          "target": "30-ot-sanitization-"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "30-ot-sanitization-",
      "name": "O.T. SANITIZATION ",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.5503602227958373,
          "pitch": 0.3493200680887689,
          "rotation": 0,
          "target": "31-ot-2-"
        },
        {
          "yaw": 3.1245333134195725,
          "pitch": 0.13535831135574128,
          "rotation": 0,
          "target": "27-o-t-lobby"
        },
        {
          "yaw": -2.4620350967162317,
          "pitch": 0.2175295516418494,
          "rotation": 5.497787143782138,
          "target": "29-ot-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "31-ot-2-",
      "name": "O.T. 2 ",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.5500677521451198,
          "pitch": 0.18185674881604186,
          "rotation": 0,
          "target": "32-ot-bed"
        },
        {
          "yaw": 2.9629196447753348,
          "pitch": 0.28173889319735324,
          "rotation": 0,
          "target": "30-ot-sanitization-"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "32-ot-bed",
      "name": "O.T. BED",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.942316419719319,
          "pitch": 0.22626878822040908,
          "rotation": 5.497787143782138,
          "target": "31-ot-2-"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};

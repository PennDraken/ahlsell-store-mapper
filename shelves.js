const colors = {
    "vvs": "#504467ff",
    "vvsActive": "#8d7baeff",
    "el": "#8e8131ff",
    "elActive": "#cece61ff",
    "verktyg": "#a52d2bff",
    "verktygActive": "#fa8e8eff",
    "psu": "#207747ff",
    "psuActive": "#49cf85ff"
}

const storeFloor = {
    "x": 24,
    "y": 13,
    "width": 1307,
    "height": 831
}

const areas = [
    // This is a list of polygons
    {
        "allPointsX": [402, 805, 806, 954, 956, 1092, 1090, 922, 921, 403],
        "allPointsY": [140, 141, 189, 191, 142, 141, 403, 405, 443, 443],
        "name": "Värme & Sanitet",
        "color": colors.vvs
    },
    {
        "allPointsX": [1325, 1175, 1177, 1090, 1088, 922, 921, 1090, 1091, 1325],
        "allPointsY": [154, 154, 138, 141, 405, 409, 586, 588, 706, 705],
        "name": "El",
        "color": colors.el
    },
    {
        "allPointsX": [402, 405, 921, 922, 743, 741, 675, 556, 557],
        "allPointsY": [838, 442, 445, 685, 686, 796, 796, 797, 838],
        "name": "Verktyg & Maskiner",
        "color": colors.verktyg
    },
    {
        "allPointsX": [921, 920, 1091, 1090, 1279, 1283, 1023, 1021],
        "allPointsY": [754, 586, 589, 707, 707, 838, 839, 754],
        "name": "Skyddsutrustning",
        "color": colors.psu
    }
];

const shelves = [
    {
        "x": 578,
        "y": 695,
        "width": 120,
        "height": 11,
        "shelfId": "40H"
    },
    {
        "x": 577,
        "y": 708,
        "width": 120,
        "height": 10,
        "shelfId": "40V"
    },
    {
        "x": 578,
        "y": 659,
        "width": 117,
        "height": 12,
        "shelfId": "39V"
    },
    {
        "x": 577,
        "y": 648,
        "width": 120,
        "height": 10,
        "shelfId": "39H"
    },
    {
        "x": 577,
        "y": 611,
        "width": 118,
        "height": 12,
        "shelfId": "38V"
    },
    {
        "x": 576,
        "y": 599,
        "width": 121,
        "height": 11,
        "shelfId": "38H"
    },
    {
        "x": 577,
        "y": 561,
        "width": 120,
        "height": 14,
        "shelfId": "37V"
    },
    {
        "x": 576,
        "y": 549,
        "width": 121,
        "height": 12,
        "shelfId": "37H"
    },
    {
        "x": 578,
        "y": 513,
        "width": 118,
        "height": 12,
        "shelfId": "36V"
    },
    {
        "x": 577,
        "y": 501,
        "width": 120,
        "height": 12,
        "shelfId": "36H"
    },
    {
        "x": 578,
        "y": 466,
        "width": 117,
        "height": 11,
        "shelfId": "35V"
    },
    {
        "x": 578,
        "y": 453,
        "width": 118,
        "height": 12,
        "shelfId": "35H"
    },
    {
        "x": 576,
        "y": 404,
        "width": 121,
        "height": 13,
        "shelfId": "19V"
    },
    {
        "x": 576,
        "y": 392,
        "width": 122,
        "height": 15,
        "shelfId": "19H"
    },
    {
        "x": 790,
        "y": 660,
        "width": 118,
        "height": 12,
        "shelfId": "30H"
    },
    {
        "x": 788,
        "y": 647,
        "width": 120,
        "height": 12,
        "shelfId": "30V"
    },
    {
        "x": 788,
        "y": 599,
        "width": 121,
        "height": 11,
        "shelfId": "31V"
    },
    {
        "x": 790,
        "y": 607,
        "width": 117,
        "height": 17,
        "shelfId": "31H"
    },
    {
        "x": 789,
        "y": 559,
        "width": 117,
        "height": 16,
        "shelfId": "32H"
    },
    {
        "x": 789,
        "y": 549,
        "width": 119,
        "height": 9,
        "shelfId": "32V"
    },
    {
        "x": 788,
        "y": 513,
        "width": 121,
        "height": 11,
        "shelfId": "33H"
    },
    {
        "x": 787,
        "y": 501,
        "width": 123,
        "height": 12,
        "shelfId": "33V"
    },
    {
        "x": 788,
        "y": 463,
        "width": 119,
        "height": 13,
        "shelfId": "34H"
    },
    {
        "x": 788,
        "y": 452,
        "width": 119,
        "height": 11,
        "shelfId": "34V"
    },
    {
        "x": 789,
        "y": 403,
        "width": 118,
        "height": 13,
        "shelfId": "18H"
    },
    {
        "x": 789,
        "y": 393,
        "width": 119,
        "height": 11,
        "shelfId": "18V"
    },
    {
        "x": 936,
        "y": 709,
        "width": 118,
        "height": 11,
        "shelfId": "87H"
    },
    {
        "x": 934,
        "y": 694,
        "width": 120,
        "height": 17,
        "shelfId": "87V"
    },
    {
        "x": 933,
        "y": 657,
        "width": 120,
        "height": 13,
        "shelfId": "86H"
    },
    {
        "x": 933,
        "y": 645,
        "width": 121,
        "height": 11,
        "shelfId": "86V"
    },
    {
        "x": 934,
        "y": 610,
        "width": 119,
        "height": 14,
        "shelfId": "85H"
    },
    {
        "x": 934,
        "y": 597,
        "width": 119,
        "height": 15,
        "shelfId": "85V"
    },
    {
        "x": 934,
        "y": 562,
        "width": 120,
        "height": 14,
        "shelfId": "60H"
    },
    {
        "x": 934,
        "y": 550,
        "width": 121,
        "height": 10,
        "shelfId": "60V"
    },
    {
        "x": 934,
        "y": 511,
        "width": 121,
        "height": 13,
        "shelfId": "61H"
    },
    {
        "x": 933,
        "y": 499,
        "width": 123,
        "height": 13,
        "shelfId": "61V"
    },
    {
        "x": 934,
        "y": 464,
        "width": 121,
        "height": 11,
        "shelfId": "62H"
    },
    {
        "x": 933,
        "y": 452,
        "width": 122,
        "height": 11,
        "shelfId": "62V"
    },
    {
        "x": 935,
        "y": 404,
        "width": 120,
        "height": 12,
        "shelfId": "17H"
    },
    {
        "x": 935,
        "y": 393,
        "width": 119,
        "height": 11,
        "shelfId": "17V"
    },
    {
        "x": 403,
        "y": 702,
        "width": 13,
        "height": 41,
        "shelfId": "44"
    },
    {
        "x": 448,
        "y": 722,
        "width": 103,
        "height": 14,
        "shelfId": "43H"
    },
    {
        "x": 449,
        "y": 733,
        "width": 102,
        "height": 11,
        "shelfId": "43V"
    },
    {
        "x": 403,
        "y": 277,
        "width": 15,
        "height": 153,
        "shelfId": "25"
    },
    {
        "x": 1126,
        "y": 707,
        "width": 141,
        "height": 16,
        "shelfId": "91"
    },
    {
        "x": 1270,
        "y": 723,
        "width": 10,
        "height": 43,
        "shelfId": "91"
    },
    {
        "x": 1127,
        "y": 255,
        "width": 157,
        "height": 11,
        "shelfId": "64V"
    },
    {
        "x": 1126,
        "y": 265,
        "width": 159,
        "height": 15,
        "shelfId": "65H"
    },
    {
        "x": 1126,
        "y": 315,
        "width": 150,
        "height": 22,
        "shelfId": "66V"
    },
    {
        "x": 1127,
        "y": 336,
        "width": 148,
        "height": 18,
        "shelfId": "66H"
    },
    {
        "x": 1123,
        "y": 391,
        "width": 163,
        "height": 15,
        "shelfId": "67V"
    },
    {
        "x": 1123,
        "y": 403,
        "width": 164,
        "height": 13,
        "shelfId": "68H"
    },
    {
        "x": 1127,
        "y": 453,
        "width": 159,
        "height": 13,
        "shelfId": "69V"
    },
    {
        "x": 1126,
        "y": 465,
        "width": 161,
        "height": 11,
        "shelfId": "69H"
    },
    {
        "x": 1126,
        "y": 501,
        "width": 161,
        "height": 11,
        "shelfId": "70V"
    },
    {
        "x": 1126,
        "y": 513,
        "width": 159,
        "height": 10,
        "shelfId": "70H"
    },
    {
        "x": 1127,
        "y": 559,
        "width": 157,
        "height": 13,
        "shelfId": "71V"
    },
    {
        "x": 1127,
        "y": 570,
        "width": 156,
        "height": 14,
        "shelfId": "72H"
    },
    {
        "x": 1125,
        "y": 639,
        "width": 149,
        "height": 18,
        "shelfId": "73H"
    },
    {
        "x": 1128,
        "y": 622,
        "width": 147,
        "height": 17,
        "shelfId": "73V"
    },
    {
        "x": 1126,
        "y": 690,
        "width": 187,
        "height": 17,
        "shelfId": "74"
    },
    {
        "x": 1054,
        "y": 139,
        "width": 14,
        "height": 81,
        "shelfId": "10H"
    },
    {
        "x": 991,
        "y": 141,
        "width": 10,
        "height": 79,
        "shelfId": "9V"
    },
    {
        "x": 775,
        "y": 139,
        "width": 9,
        "height": 81,
        "shelfId": "8H"
    },
    {
        "x": 762,
        "y": 140,
        "width": 11,
        "height": 82,
        "shelfId": "8V"
    },
    {
        "x": 725,
        "y": 140,
        "width": 13,
        "height": 83,
        "shelfId": "7H"
    },
    {
        "x": 713,
        "y": 141,
        "width": 10,
        "height": 82,
        "shelfId": "7V"
    },
    {
        "x": 1043,
        "y": 140,
        "width": 14,
        "height": 79,
        "shelfId": "10V"
    },
    {
        "x": 1003,
        "y": 139,
        "width": 11,
        "height": 81,
        "shelfId": "9H"
    },
    {
        "x": 677,
        "y": 142,
        "width": 11,
        "height": 78,
        "shelfId": "6H"
    },
    {
        "x": 665,
        "y": 139,
        "width": 13,
        "height": 81,
        "shelfId": "6V"
    },
    {
        "x": 627,
        "y": 139,
        "width": 13,
        "height": 83,
        "shelfId": "5H"
    },
    {
        "x": 616,
        "y": 140,
        "width": 11,
        "height": 83,
        "shelfId": "5V"
    },
    {
        "x": 579,
        "y": 141,
        "width": 13,
        "height": 81,
        "shelfId": "4H"
    },
    {
        "x": 566,
        "y": 141,
        "width": 12,
        "height": 83,
        "shelfId": "4V"
    },
    {
        "x": 531,
        "y": 141,
        "width": 11,
        "height": 81,
        "shelfId": "3H"
    },
    {
        "x": 517,
        "y": 142,
        "width": 15,
        "height": 81,
        "shelfId": "3V"
    },
    {
        "x": 470,
        "y": 142,
        "width": 11,
        "height": 78,
        "shelfId": "2V"
    },
    {
        "x": 481,
        "y": 141,
        "width": 10,
        "height": 79,
        "shelfId": "2H"
    },
    {
        "x": 432,
        "y": 140,
        "width": 10,
        "height": 83,
        "shelfId": "1H"
    },
    {
        "x": 420,
        "y": 140,
        "width": 11,
        "height": 82,
        "shelfId": "1V"
    },
    {
        "x": 419,
        "y": 685,
        "width": 120,
        "height": 11,
        "shelfId": "44V"
    },
    {
        "x": 418,
        "y": 673,
        "width": 119,
        "height": 11,
        "shelfId": "45"
    },
    {
        "x": 403,
        "y": 433,
        "width": 13,
        "height": 231,
        "shelfId": "46"
    },
    {
        "x": 452,
        "y": 616,
        "width": 85,
        "height": 21,
        "shelfId": "47V"
    },
    {
        "x": 454,
        "y": 598,
        "width": 83,
        "height": 21,
        "shelfId": "47H"
    },
    {
        "x": 453,
        "y": 540,
        "width": 84,
        "height": 16,
        "shelfId": "48V"
    },
    {
        "x": 455,
        "y": 520,
        "width": 84,
        "height": 20,
        "shelfId": "48H"
    },
    {
        "x": 456,
        "y": 473,
        "width": 83,
        "height": 11,
        "shelfId": "49V"
    },
    {
        "x": 458,
        "y": 459,
        "width": 83,
        "height": 13,
        "shelfId": "50"
    },
    {
        "x": 775,
        "y": 289,
        "width": 15,
        "height": 80,
        "shelfId": "16V"
    },
    {
        "x": 789,
        "y": 289,
        "width": 12,
        "height": 80,
        "shelfId": "16H"
    },
    {
        "x": 827,
        "y": 285,
        "width": 14,
        "height": 86,
        "shelfId": "15V"
    },
    {
        "x": 839,
        "y": 287,
        "width": 12,
        "height": 84,
        "shelfId": "15H"
    },
    {
        "x": 881,
        "y": 287,
        "width": 15,
        "height": 80,
        "shelfId": "14V"
    },
    {
        "x": 897,
        "y": 288,
        "width": 10,
        "height": 81,
        "shelfId": "14H"
    },
    {
        "x": 936,
        "y": 288,
        "width": 12,
        "height": 82,
        "shelfId": "13V"
    },
    {
        "x": 949,
        "y": 288,
        "width": 10,
        "height": 83,
        "shelfId": "13H"
    },
    {
        "x": 989,
        "y": 289,
        "width": 13,
        "height": 78,
        "shelfId": "12V"
    },
    {
        "x": 1002,
        "y": 289,
        "width": 12,
        "height": 80,
        "shelfId": "12H"
    },
    {
        "x": 1042,
        "y": 289,
        "width": 13,
        "height": 78,
        "shelfId": "11V"
    },
    {
        "x": 1055,
        "y": 287,
        "width": 10,
        "height": 79,
        "shelfId": "11H"
    },
    {
        "x": 1312,
        "y": 277,
        "width": 13,
        "height": 373,
        "shelfId": "67"
    },
    {
        "x": 455,
        "y": 278,
        "width": 15,
        "height": 152,
        "shelfId": "23V"
    },
    {
        "x": 472,
        "y": 278,
        "width": 13,
        "height": 152,
        "shelfId": "23H"
    },
    {
        "x": 503,
        "y": 278,
        "width": 13,
        "height": 153,
        "shelfId": "22V"
    },
    {
        "x": 518,
        "y": 276,
        "width": 12,
        "height": 153,
        "shelfId": "22V"
    },
    {
        "x": 593,
        "y": 280,
        "width": 11,
        "height": 84,
        "shelfId": "21H"
    },
    {
        "x": 577,
        "y": 280,
        "width": 14,
        "height": 84,
        "shelfId": "21V"
    },
    {
        "x": 630,
        "y": 275,
        "width": 75,
        "height": 37,
        "shelfId": "20"
    },
    {
        "x": 630,
        "y": 336,
        "width": 79,
        "height": 35,
        "shelfId": "21"
    },
    {
        "x": 557,
        "y": 783,
        "width": 118,
        "height": 12,
        "shelfId": "41"
    },
    {
        "x": 1027,
        "y": 771,
        "width": 93,
        "height": 20,
        "shelfId": "88"
    },
    {
        "x": 1028,
        "y": 792,
        "width": 95,
        "height": 10,
        "shelfId": "88"
    },
    {
        "x": 1145,
        "y": 776,
        "width": 81,
        "height": 15,
        "shelfId": "89"
    },
    {
        "x": 1145,
        "y": 791,
        "width": 80,
        "height": 14,
        "shelfId": "89"
    },
    {
        "x": 1025,
        "y": 825,
        "width": 92,
        "height": 15,
        "shelfId": "94"
    },
    {
        "x": 1118,
        "y": 823,
        "width": 70,
        "height": 18,
        "shelfId": "93"
    },
    {
        "x": 1269,
        "y": 782,
        "width": 13,
        "height": 42,
        "shelfId": "91"
    },
    {
        "x": 1220,
        "y": 822,
        "width": 48,
        "height": 17,
        "shelfId": "91"
    },
    {
        "x": 421,
        "y": 221,
        "width": 23,
        "height": 11,
        "shelfId": "1G"
    },
    {
        "x": 470,
        "y": 219,
        "width": 23,
        "height": 13,
        "shelfId": "2G"
    },
    {
        "x": 518,
        "y": 220,
        "width": 25,
        "height": 13,
        "shelfId": "3G"
    },
    {
        "x": 567,
        "y": 221,
        "width": 24,
        "height": 12,
        "shelfId": "4G"
    },
    {
        "x": 616,
        "y": 221,
        "width": 23,
        "height": 11,
        "shelfId": "5G"
    },
    {
        "x": 663,
        "y": 220,
        "width": 25,
        "height": 13,
        "shelfId": "6G"
    },
    {
        "x": 713,
        "y": 223,
        "width": 25,
        "height": 11,
        "shelfId": "7G"
    },
    {
        "x": 761,
        "y": 222,
        "width": 25,
        "height": 11,
        "shelfId": "8G"
    },
    {
        "x": 989,
        "y": 219,
        "width": 25,
        "height": 13,
        "shelfId": "9G"
    },
    {
        "x": 1041,
        "y": 220,
        "width": 27,
        "height": 12,
        "shelfId": "10G"
    },
    {
        "x": 774,
        "y": 394,
        "width": 13,
        "height": 22,
        "shelfId": "18G"
    },
    {
        "x": 696,
        "y": 395,
        "width": 13,
        "height": 22,
        "shelfId": "19G"
    },
    {
        "x": 694,
        "y": 452,
        "width": 15,
        "height": 23,
        "shelfId": "35G"
    },
    {
        "x": 696,
        "y": 503,
        "width": 13,
        "height": 19,
        "shelfId": "36G"
    },
    {
        "x": 696,
        "y": 548,
        "width": 11,
        "height": 25,
        "shelfId": "37G"
    },
    {
        "x": 696,
        "y": 598,
        "width": 15,
        "height": 26,
        "shelfId": "38G"
    },
    {
        "x": 696,
        "y": 650,
        "width": 12,
        "height": 23,
        "shelfId": "39G"
    },
    {
        "x": 699,
        "y": 696,
        "width": 11,
        "height": 25,
        "shelfId": "40G"
    },
    {
        "x": 538,
        "y": 678,
        "width": 14,
        "height": 15,
        "shelfId": "44G"
    },
    {
        "x": 537,
        "y": 598,
        "width": 15,
        "height": 40,
        "shelfId": "47G"
    },
    {
        "x": 540,
        "y": 461,
        "width": 15,
        "height": 22,
        "shelfId": "50"
    },
    {
        "x": 776,
        "y": 452,
        "width": 15,
        "height": 22,
        "shelfId": "34G"
    },
    {
        "x": 772,
        "y": 498,
        "width": 15,
        "height": 26,
        "shelfId": "33G"
    },
    {
        "x": 775,
        "y": 546,
        "width": 15,
        "height": 27,
        "shelfId": "32G"
    },
    {
        "x": 774,
        "y": 597,
        "width": 15,
        "height": 27,
        "shelfId": "31G"
    },
    {
        "x": 776,
        "y": 646,
        "width": 15,
        "height": 27,
        "shelfId": "30G"
    },
    // VA-Hyllor
    {
        "x": 380,
        "y": 307,
        "width": 24,
        "height": 436,
        "shelfId": "C"
    },
    {
        "x": 286,
        "y": 238,
        "width": 24,
        "height": 505,
        "shelfId": "C"
    },
    {
        "x": 263,
        "y": 300,
        "width": 24,
        "height": 443,
        "shelfId": "D"
    },
    {
        "x": 148,
        "y": 359,
        "width": 24,
        "height": 384,
        "shelfId": "D"
    },
    {
        "x": 34,
        "y": 361,
        "width": 24,
        "height": 373,
        "shelfId": "G"
    },
    {
        "x": 123,
        "y": 361,
        "width": 24,
        "height": 380,
        "shelfId": "G"
    },
    // "{""name"":""rect"",""x"":63,""y"":809,""width"":311,""height"":26}","{""Hyllor"":""""}",
    // X ends at 7 for the outdoor "shelf"
    {
        "x": -60,
        "y": 13,
        "width": 67,
        "height":832,
        "shelfId": "S"
    }
];

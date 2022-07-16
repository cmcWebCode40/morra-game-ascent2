// Automatically generated with Reach 0.1.11 (f1ffa756)
/* eslint-disable */
export const _version = '0.1.11';
export const _versionHash = '0.1.11 (f1ffa756)';
export const _backendVersion = 17;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  
  return {
    infos: {
      },
    views: {
      1: [ctc0],
      2: [ctc0],
      3: [ctc0, ctc0],
      4: [ctc0]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Tuple([]);
  return {
    mapDataTy: ctc0
    };
  };
export async function Juliet(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Juliet expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Juliet expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Null;
  const ctc2 = stdlib.T_Address;
  
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 0,
    out_tys: [ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v94], secs: v96, time: v95, didSend: v28, from: v93 } = txn1;
  ;
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 1,
    out_tys: [ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v98], secs: v100, time: v99, didSend: v34, from: v97 } = txn2;
  ;
  const v101 = stdlib.addressEq(v93, v97);
  stdlib.assert(v101, {
    at: './index.rsh:32:21:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Juliet'
    });
  const v104 = stdlib.protect(ctc0, await interact.getFingers(), {
    at: './index.rsh:36:69:application',
    fs: ['at ./index.rsh:35:26:application call to [unknown function] (defined at: ./index.rsh:35:30:function exp)'],
    msg: 'getFingers',
    who: 'Juliet'
    });
  const v105 = stdlib.protect(ctc0, await interact.guessTotalFinger(v104), {
    at: './index.rsh:37:73:application',
    fs: ['at ./index.rsh:35:26:application call to [unknown function] (defined at: ./index.rsh:35:30:function exp)'],
    msg: 'guessTotalFinger',
    who: 'Juliet'
    });
  
  const txn3 = await (ctc.sendrecv({
    args: [v93, v104],
    evt_cnt: 1,
    funcNum: 2,
    lct: v99,
    onlyIf: true,
    out_tys: [ctc0],
    pay: [stdlib.checkedBigNumberify('./index.rsh:40:22:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn3) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v107], secs: v109, time: v108, didSend: v44, from: v106 } = txn3;
      
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc2, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v107], secs: v109, time: v108, didSend: v44, from: v106 } = txn3;
  ;
  const txn4 = await (ctc.sendrecv({
    args: [v93, v106, v105],
    evt_cnt: 1,
    funcNum: 3,
    lct: v108,
    onlyIf: true,
    out_tys: [ctc0],
    pay: [stdlib.checkedBigNumberify('./index.rsh:43:22:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn4) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v111], secs: v113, time: v112, didSend: v50, from: v110 } = txn4;
      
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc2, ctc2, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v111], secs: v113, time: v112, didSend: v50, from: v110 } = txn4;
  ;
  const v114 = stdlib.addressEq(v106, v110);
  stdlib.assert(v114, {
    at: './index.rsh:43:22:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Juliet'
    });
  const txn5 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 4,
    out_tys: [ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v119], secs: v121, time: v120, didSend: v60, from: v118 } = txn5;
  ;
  const v122 = stdlib.addressEq(v93, v118);
  stdlib.assert(v122, {
    at: './index.rsh:51:21:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Juliet'
    });
  stdlib.protect(ctc1, await interact.seePlayerGuessedNumbers(stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1')), {
    at: './index.rsh:69:49:application',
    fs: ['at ./index.rsh:68:13:application call to [unknown function] (defined at: ./index.rsh:68:46:function exp)'],
    msg: 'seePlayerGuessedNumbers',
    who: 'Juliet'
    });
  
  return;
  
  
  
  
  
  
  
  
  
  
  };
export async function Romeo(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Romeo expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Romeo expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Null;
  const ctc2 = stdlib.T_Address;
  
  
  const v91 = stdlib.protect(ctc0, await interact.getFingers(), {
    at: './index.rsh:24:68:application',
    fs: ['at ./index.rsh:23:25:application call to [unknown function] (defined at: ./index.rsh:23:29:function exp)'],
    msg: 'getFingers',
    who: 'Romeo'
    });
  const v92 = stdlib.protect(ctc0, await interact.guessTotalFinger(v91), {
    at: './index.rsh:25:72:application',
    fs: ['at ./index.rsh:23:25:application call to [unknown function] (defined at: ./index.rsh:23:29:function exp)'],
    msg: 'guessTotalFinger',
    who: 'Romeo'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v91],
    evt_cnt: 1,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:28:21:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc0],
    pay: [stdlib.checkedBigNumberify('./index.rsh:28:21:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v94], secs: v96, time: v95, didSend: v28, from: v93 } = txn1;
      
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v94], secs: v96, time: v95, didSend: v28, from: v93 } = txn1;
  ;
  const txn2 = await (ctc.sendrecv({
    args: [v93, v92],
    evt_cnt: 1,
    funcNum: 1,
    lct: v95,
    onlyIf: true,
    out_tys: [ctc0],
    pay: [stdlib.checkedBigNumberify('./index.rsh:32:21:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v98], secs: v100, time: v99, didSend: v34, from: v97 } = txn2;
      
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc2, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v98], secs: v100, time: v99, didSend: v34, from: v97 } = txn2;
  ;
  const v101 = stdlib.addressEq(v93, v97);
  stdlib.assert(v101, {
    at: './index.rsh:32:21:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Romeo'
    });
  const txn3 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 2,
    out_tys: [ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v107], secs: v109, time: v108, didSend: v44, from: v106 } = txn3;
  ;
  const txn4 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 3,
    out_tys: [ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v111], secs: v113, time: v112, didSend: v50, from: v110 } = txn4;
  ;
  const v114 = stdlib.addressEq(v106, v110);
  stdlib.assert(v114, {
    at: './index.rsh:43:22:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Romeo'
    });
  const v117 = stdlib.add(v94, v107);
  stdlib.protect(ctc1, await interact.seePlayersTotalFinger(v117), {
    at: './index.rsh:48:72:application',
    fs: ['at ./index.rsh:46:25:application call to [unknown function] (defined at: ./index.rsh:46:29:function exp)'],
    msg: 'seePlayersTotalFinger',
    who: 'Romeo'
    });
  
  const txn5 = await (ctc.sendrecv({
    args: [v93, v117],
    evt_cnt: 1,
    funcNum: 4,
    lct: v112,
    onlyIf: true,
    out_tys: [ctc0],
    pay: [stdlib.checkedBigNumberify('./index.rsh:51:21:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn5) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v119], secs: v121, time: v120, didSend: v60, from: v118 } = txn5;
      
      ;
      
      sim_r.txns.push({
        kind: 'halt',
        tok: undefined /* Nothing */
        })
      sim_r.isHalt = true;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc2, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v119], secs: v121, time: v120, didSend: v60, from: v118 } = txn5;
  ;
  const v122 = stdlib.addressEq(v93, v118);
  stdlib.assert(v122, {
    at: './index.rsh:51:21:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Romeo'
    });
  stdlib.protect(ctc1, await interact.seePlayerGuessedNumbers(stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1')), {
    at: './index.rsh:69:49:application',
    fs: ['at ./index.rsh:68:13:application call to [unknown function] (defined at: ./index.rsh:68:46:function exp)'],
    msg: 'seePlayerGuessedNumbers',
    who: 'Romeo'
    });
  
  return;
  
  
  
  
  
  
  
  
  
  
  };
const _ALGO = {
  ABI: {
    impure: [],
    pure: [],
    sigs: []
    },
  appApproval: `BiAFAAECBAMmAgEAACI1ADEYQQHNKWRJIls1AYEIWzUCNhoAF0lBAAciNQQjNQYANhoCFzUENhoDNhoBF0kkDEAAyUkhBAxAAIFJJQxAADElEkQlNAESRDQESSISTDQCEhFEKGQ1A0k1BRc1/4AE+YuveDT/FlCwNAMxABJEQgERSCEENAESRDQESSISTDQCEhFEKGRJNQNXACA1/0k1BRc1/oAE1Axs1jT+FlCwNANXICAxABJENP8oSwFXACBnSCU1ATIGNQJCAONIJDQBEkQ0BEkiEkw0AhIRRChkSTUDNf9JNQUXNf6ABJdO9xc0/hZQsDT/MQBQKEsBVwBAZ0ghBDUBMgY1AkIAokkjDEAAQ0gjNAESRDQESSISTDQCEhFEKGRJNQM1/0k1BRc1/oAE1RUZFDT+FlCwNP8xABJENP8oSwFXACBnSCQ1ATIGNQJCAFlIgaCNBogAoiI0ARJENARJIhJMNAISEURJNQUXNf+ABILEYf40/xZQsDEAKEsBVwAgZ0gjNQEyBjUCQgAcMRmBBRJEsSKyASKyCCOyEDIJsgkyCrIHs0IABTEZIhJEKTQBFjQCFlBnNAZBAAqABBUffHU0B1CwNABJIwgyBBJEMRYSRCNDMRkiEkRC/98iMTQSRCQxNRJEIjE2EkQiMTcSRCI1ASI1AkL/rzQASUojCDUAOAcyChJEOBAjEkQ4CBJEiQ==`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 1,
  stateSize: 64,
  unsupported: [],
  version: 10,
  warnings: []
  };
const _ETH = {
  ABI: `[
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v94",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "msg",
        "type": "uint256"
      }
    ],
    "name": "ReachError",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v94",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e0",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v98",
                "type": "uint256"
              }
            ],
            "internalType": "struct T3",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T4",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e1",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v107",
                "type": "uint256"
              }
            ],
            "internalType": "struct T6",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e2",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v111",
                "type": "uint256"
              }
            ],
            "internalType": "struct T8",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T9",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e3",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v119",
                "type": "uint256"
              }
            ],
            "internalType": "struct T10",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T11",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e4",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [],
    "name": "_reachCreationTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentState",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v98",
                "type": "uint256"
              }
            ],
            "internalType": "struct T3",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T4",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m1",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v107",
                "type": "uint256"
              }
            ],
            "internalType": "struct T6",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m2",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v111",
                "type": "uint256"
              }
            ],
            "internalType": "struct T8",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T9",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m3",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v119",
                "type": "uint256"
              }
            ],
            "internalType": "struct T10",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T11",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m4",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x608060405260405162000ced38038062000ced8339810160408190526200002691620001a3565b6000805543600355604080513381528251602080830191909152830151518183015290517f28822ae872174fb8917549901c639f920e5c2ef0fb881ea78a94dee578586e9d9181900360600190a16200008234156007620000d3565b6040805160208082018352338083526001600081905543905583519182015290910160405160208183030381529060405260029080519060200190620000ca929190620000fd565b50505062000282565b81620000f95760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b8280546200010b9062000245565b90600052602060002090601f0160209004810192826200012f57600085556200017a565b82601f106200014a57805160ff19168380011785556200017a565b828001600101855582156200017a579182015b828111156200017a5782518255916020019190600101906200015d565b50620001889291506200018c565b5090565b5b808211156200018857600081556001016200018d565b6000818303604080821215620001b857600080fd5b80518082016001600160401b038082118383101715620001e857634e487b7160e01b600052604160045260246000fd5b818452865183526020601f19860112156200020257600080fd5b8351945060208501915084821081831117156200022f57634e487b7160e01b600052604160045260246000fd5b5090915260209384015182529283015250919050565b600181811c908216806200025a57607f821691505b602082108114156200027c57634e487b7160e01b600052602260045260246000fd5b50919050565b610a5b80620002926000396000f3fe60806040526004361061006e5760003560e01c8063873779a11161004b578063873779a1146100c3578063a209ad4e146100d6578063ab53f2c6146100e9578063f4cedab01461010c57005b80631e93b0f11461007757806345f703961461009b57806383230757146100ae57005b3661007557005b005b34801561008357600080fd5b506003545b6040519081526020015b60405180910390f35b6100756100a936600461086c565b61011f565b3480156100ba57600080fd5b50600154610088565b6100756100d136600461086c565b6102ab565b6100756100e436600461086c565b61040f565b3480156100f557600080fd5b506100fe610555565b60405161009292919061088f565b61007561011a36600461086c565b6105f2565b61012f600260005414600d610759565b6101498135158061014257506001548235145b600e610759565b60008080556002805461015b906108ec565b80601f0160208091040260200160405190810160405280929190818152602001828054610187906108ec565b80156101d45780601f106101a9576101008083540402835291602001916101d4565b820191906000526020600020905b8154815290600101906020018083116101b757829003601f168201915b50505050508060200190518101906101ec919061093d565b90507f263ae805ef0ac75eacb24e0a5ab78e31f247f0b08fe9d5cbf5188647933698b8338360405161021f929190610995565b60405180910390a16102333415600c610759565b604080518082019091526000808252602082015281516001600160a01b0390811680835233602080850191825260036000554360015560408051918201939093529051909216908201526060015b604051602081830303815290604052600290805190602001906102a592919061077e565b50505050565b6102bb600160005414600a610759565b6102d5813515806102ce57506001548235145b600b610759565b6000808055600280546102e7906108ec565b80601f0160208091040260200160405190810160405280929190818152602001828054610313906108ec565b80156103605780601f1061033557610100808354040283529160200191610360565b820191906000526020600020905b81548152906001019060200180831161034357829003601f168201915b5050505050806020019051810190610378919061093d565b90507f3957da95a08a7316b724c4fe20ec058158ff5f626860362a6b6aafcb999f722533836040516103ab929190610995565b60405180910390a16103bf34156008610759565b80516103d7906001600160a01b031633146009610759565b60408051602081019091526000815281516001600160a01b031680825260026000554360015560408051602081019290925201610281565b61041f6004600054146015610759565b6104398135158061043257506001548235145b6016610759565b60008080556002805461044b906108ec565b80601f0160208091040260200160405190810160405280929190818152602001828054610477906108ec565b80156104c45780601f10610499576101008083540402835291602001916104c4565b820191906000526020600020905b8154815290600101906020018083116104a757829003601f168201915b50505050508060200190518101906104dc919061093d565b90507f117ff0fc7909f539043dcba1a015e3c49852b86bcb1c87a6cfa653f771ccbdc0338360405161050f929190610995565b60405180910390a161052334156013610759565b805161053b906001600160a01b031633146014610759565b6000808055600181905561055190600290610802565b5050565b60006060600054600280805461056a906108ec565b80601f0160208091040260200160405190810160405280929190818152602001828054610596906108ec565b80156105e35780601f106105b8576101008083540402835291602001916105e3565b820191906000526020600020905b8154815290600101906020018083116105c657829003601f168201915b50505050509050915091509091565b6106026003600054146011610759565b61061c8135158061061557506001548235145b6012610759565b60008080556002805461062e906108ec565b80601f016020809104026020016040519081016040528092919081815260200182805461065a906108ec565b80156106a75780601f1061067c576101008083540402835291602001916106a7565b820191906000526020600020905b81548152906001019060200180831161068a57829003601f168201915b50505050508060200190518101906106bf91906109bc565b90507f96fec920882ac36be2ad80273a3572d38922662f78edb2ef77dc6748d3fd2cc133836040516106f2929190610995565b60405180910390a16107063415600f610759565b6020810151610721906001600160a01b031633146010610759565b60408051602081019091526000815281516001600160a01b031680825260046000554360015560408051602081019290925201610281565b816105515760405163100960cb60e01b81526004810182905260240160405180910390fd5b82805461078a906108ec565b90600052602060002090601f0160209004810192826107ac57600085556107f2565b82601f106107c557805160ff19168380011785556107f2565b828001600101855582156107f2579182015b828111156107f25782518255916020019190600101906107d7565b506107fe92915061083f565b5090565b50805461080e906108ec565b6000825580601f1061081e575050565b601f01602090049060005260206000209081019061083c919061083f565b50565b5b808211156107fe5760008155600101610840565b60006040828403121561086657600080fd5b50919050565b60006040828403121561087e57600080fd5b6108888383610854565b9392505050565b82815260006020604081840152835180604085015260005b818110156108c3578581018301518582016060015282016108a7565b818111156108d5576000606083870101525b50601f01601f191692909201606001949350505050565b600181811c9082168061090057607f821691505b6020821081141561086657634e487b7160e01b600052602260045260246000fd5b80516001600160a01b038116811461093857600080fd5b919050565b60006020828403121561094f57600080fd5b6040516020810181811067ffffffffffffffff8211171561098057634e487b7160e01b600052604160045260246000fd5b60405261098c83610921565b81529392505050565b6001600160a01b038316815260608101610888602083018480358252602090810135910152565b6000604082840312156109ce57600080fd5b6040516040810181811067ffffffffffffffff821117156109ff57634e487b7160e01b600052604160045260246000fd5b604052610a0b83610921565b8152610a1960208401610921565b6020820152939250505056fea264697066735822122043a2f6d46de2168718e42f3131cc9ecc93f082798dba886902f3878524034fd164736f6c634300080c0033`,
  BytecodeLen: 3309,
  Which: `oD`,
  version: 7,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:30:17:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  2: {
    at: './index.rsh:33:17:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:41:17:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './index.rsh:44:17:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  5: {
    at: './index.rsh:72:17:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "Juliet": Juliet,
  "Romeo": Romeo
  };
export const _APIs = {
  };

import http from 'k6/http';
import { sleep, check } from 'k6';

export const options = {
  //iterations: 10,

  //vus: 10,
  //duration: '30s',

  stages:[
    { duration: '10s', target: 10},
    { duration: '20s', target: 10},
    { duration: '10s', target: 30},
    { duration: '10s', target: 30},
    { duration: '20s', target: 0}
  ],
  thresholds: {
    http_req_duration: ['p(90)<10', 'max<20'],
    http_req_failed: ['rate<0.01']
  }
};

export default function () {
    const url = 'http://localhost:3000/login';

    const payload = JSON.stringify({
        username: 'julio.lima',
        senha: '123456'
    });

    const params = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

  const resposta = http.post(url, payload,params);

  check(resposta, {
    'Validar que o status é 200': (r) => r.status === 200,
    'Validar que o token é string': (r) => typeof(r.json().token) == 'string'
  })

  //console.log(resposta);

  sleep(1);
}
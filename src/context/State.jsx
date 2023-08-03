import { DataContext } from ".";
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom"
import axios from 'axios';

const defOffers = [
    {
      value: 1050,
      label: `1050dh - ثلاثة أشهر كاملة`,
    },
    {
      value: 490,
      label: `490dh - كل شهر`,
    },
]

export function State({ children }) {
    const [search,setSearch] = useSearchParams();
    const [code, setCode] = useState(search.get("code"));
    const [errC, setErrC] = useState('');
    // const navigate = useNavigate();
    const [offers,setOffers] = useState(defOffers)
    
    
    useEffect(() => {
        let query = search
        let q2 = new URLSearchParams();
        if(query.has('code') && query.get('code') !== '') {
            q2.set('code', query.get('code'));
            setCode(query.get('code'));
        } else {
            return
        }
        axios
        .get('https://lkhibra.alwaysdata.net/api/price.php?' + q2.toString())
        .then((response) => {
            const arr = response.data;
            if (arr == null) {
            // query.delete('code');
            setOffers([
                {
                value: 1050,
                label: `1050dh - ثلاثة أشهر كاملة`,
                },
                {
                value: 490,
                label: `490dh - كل شهر`,
                },
            ]);
            } else {
            setOffers([
                {
                value: arr[0],
                label: `${arr[0]}dh - ثلاثة أشهر كاملة ${q2.has('code')?`(with ${100*(1050-arr[0])/1050}% discount)`:''}`,
                },
                {
                value: arr[1],
                label: `${arr[1]}dh - كل شهر ${q2.has('code')?`(with ${100*(490-arr[1])/490}% discount)`:''}`,
                },
            ]);
            }
        })
        .catch((error) => {
            setErrC(true)
        });
    }, []);

    useEffect(() => {
        let q = new URLSearchParams();
        q.set('code', code);
        if (code !== search.get("code") && code)
            setSearch(q,{replace: true})
        else
            return
        axios
        .get('https://lkhibra.alwaysdata.net/api/price.php?' + q.toString())
        .then((response) => {
          const arr = response.data;
        //   let s = new URLSearchParams(window.location.search);
          if (arr == null) {
            setErrC(true)
            setOffers(defOffers)
            // s.delete('code');
            // setSearch(q,{replace: true})
            // navigate(`?${s.toString()}`, {replace: true});
            // window.location.search = s.toString();
          } else {
            setErrC(false)
            // s.set('code', code);
            
            // navigate(`?${s.toString()}`, {replace: true});
            setOffers([
              {
                value: arr[0],
                label: `${arr[0]}dh - ثلاثة أشهر كاملة (with ${100*(1050-arr[0])/1050}% discount)`,
              },
              {
                value: arr[1],
                label: `${arr[1]}dh - كل شهر (with ${100*(490-arr[1])/490}% discount)`,
              },
            ]);
          }
        })
        .catch((error) => {
            setErrC(true)
        });
    },[code])

    return <DataContext.Provider value={{
        offers,
        setOffers,
        code,
        setCode,
        errC,
        setErrC
    }}>
        {children}
    </DataContext.Provider>;
}

export default State
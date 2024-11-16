import { useRef, useState } from 'react';
import './search.css';
import DetailedView from './components/detailed-view';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../config/firebaseConfig';

interface UserRecord {
    id: string;
    fccid: number;
    callsign: string;
    full_name?: string;
    first?: string;
    middle?: string;
    last?: string;
    address1?: string;
    city?: string;
    state?: string;
    zip?: string;
}

const fetcher = async (callsign: string) => {
        const dbRef = collection(db, "fcc_amateur_aamir");
        const dbQuery = query(
            dbRef,
            where('callsign', '==', callsign),
        );

        const querySnapshot = await getDocs(dbQuery);

        if (!querySnapshot.empty) {
            const doc = querySnapshot.docs[0]; 
            const callSignData = { id: doc.id, ...doc.data() }; 
            return callSignData;
        } else {
            return null; 
        }
};


const Search = () => {
    const [data, setData] = useState<UserRecord | null>(null);
    const [loading, setLoading] = useState(false); 
    const [showEmptyRecordsMessage, setShowEmptyRecordsMessage] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);

    const handleSearch = async () => {
        const searchTerm = inputRef.current?.value;
        if (!searchTerm) {
            return;
        }

        setLoading(true);  
        setShowEmptyRecordsMessage(false);
        setData(null);
        const data = await fetcher(searchTerm.trim()) as UserRecord;
        if(!data) {
            setShowEmptyRecordsMessage(true);
        }
        else {
            setData(data);
        }
        setLoading(false);
    }

    return (
        <div className='column'>
            <div className='search'>
                <input type="text" ref={inputRef} />
                <button onClick={handleSearch}>Search</button>
            </div>
            {loading && <div className='row'>Loading...</div>} 
            {showEmptyRecordsMessage && <div className='row'>No record exists</div>} 
            {!loading && data && <DetailedView {...data} />}
        </div>
    );
}

export default Search;

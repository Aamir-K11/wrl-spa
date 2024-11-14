import useSWR from 'swr';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '../../../config/firebaseConfig';
import { generateWeekDates } from '../../../util/calculateWeeksAndMonths';


const fetcher = async (startTimestamp: number, endTimestamp: number) => {
 
    const logbookContactsRef = collection(db, "LogBookContact");
    const logbookQuery = query(
        logbookContactsRef,
        where('contactTimeStamp', '>=', new Date(startTimestamp)),
        where("contactTimeStamp", "<=", new Date(endTimestamp))
    );

    const querySnapshot = await getDocs(logbookQuery);

    const contactsData = querySnapshot.docs.map(doc => {
        const date = doc.data().contactTimeStamp.toDate();
        return date.toLocaleDateString('en-US', { month: 'numeric', day: 'numeric' }); 
    });
 
    const aggregatedData = contactsData.reduce((acc, date) => {
        acc[date] = (acc[date] || 0) + 1;
        return acc;
    }, {});

    if (Object.keys(aggregatedData).length === 0) {
            return {};
    }

    const weekDates = generateWeekDates(startTimestamp);

    return weekDates.reduce((acc, date) => {
        acc[date] = aggregatedData[date] || 0; 
        return acc;
    }, {});

};

export function useWeekAnalytics(startTimestamp: number, endTimestamp: number) {
    const { data, error } = useSWR(
        startTimestamp && endTimestamp ? [startTimestamp, endTimestamp] : null,
        () => fetcher(startTimestamp, endTimestamp),
        {
            revalidateOnFocus: false,
            errorRetryCount: 3,
            dedupingInterval: 1000 * 60 * 60
        }
    );

    if(error) throw error;

    return {
        data,
        isLoading: !data && !error,
        isError: error
    };
}

import { useState, useEffect } from "react";
import DataList from "../components/DataList";
import { Modal } from "bootstrap"

export default function Data(item) {
    let [data, setData] = useState([])
    let [modalData, setModalData] = useState(null)

    useEffect(() => {
        let arrayData= [
            {
                date: "2017-06",
                status: "favorite",
                label:" BebasBayar | Menu Favorit",
                nb_visits:"1564",
                nb_hits:"2033",
                sum_time_spent:"69711",
                nb_hits_with_time_generation:"1392",
                min_time_generation:"0.001",
                max_time_generation:"47.593",
                sum_bandwidth:"0",
                nb_hits_with_bandwidth:"0",
                min_bandwidth:null,
                max_bandwidth:null,
                sum_daily_nb_uniq_visitors:"1413",
                entry_nb_visits:"176",
                entry_nb_actions:"802",
                entry_sum_visit_length:"66663",
                entry_bounce_count:"27",
                exit_nb_visits:"128",
                sum_daily_entry_nb_uniq_visitors:"158",
                sum_daily_exit_nb_uniq_visitors:"121",
                avg_bandwidth:"0",
                avg_time_on_page:"34",
                bounce_rate: "15%",
                exit_rate:"8%",
                avg_time_generation:"0.853"
            },
            {
                date: "2019-07",
                status: "favorite",
                label:" BebasBayar | Menu Favorit",
                nb_visits:"1956",
                nb_hits:"2605",
                sum_time_spent:"92056",
                nb_hits_with_time_generation:"1850",
                min_time_generation:"0.001",
                max_time_generation:"252.825",
                sum_bandwidth:"0",
                nb_hits_with_bandwidth:"0",
                min_bandwidth:null,
                max_bandwidth:null,
                entry_nb_visits:"266",
                entry_nb_actions:"933",
                entry_sum_visit_length:"85487",
                entry_bounce_count:"80",
                exit_nb_visits:"200",
                sum_daily_nb_uniq_visitors:"1671",
                sum_daily_entry_nb_uniq_visitors:"204",
                sum_daily_exit_nb_uniq_visitors:"174",
                avg_bandwidth:"0",
                avg_time_on_page:"35",
                bounce_rate:"30%",
                exit_rate:"10%",
                avg_time_generation:"1.103"
            },
            {
                date: "2017-08",
                status: "favorite",
                label:" BebasBayar | Menu Favorit",
                nb_visits:"2105",
                nb_hits:"2817",
                sum_time_spent:"96139",
                nb_hits_with_time_generation:"2013",
                min_time_generation:"0.001",
                max_time_generation:"64.769",
                sum_bandwidth:"0",
                nb_hits_with_bandwidth:"0",
                min_bandwidth:null,
                max_bandwidth:null,
                entry_nb_visits:"288",
                entry_nb_actions:"883",
                entry_sum_visit_length:"79970",
                entry_bounce_count:"99",
                exit_nb_visits:"224",
                sum_daily_nb_uniq_visitors:"1786",
                sum_daily_entry_nb_uniq_visitors:"226",
                sum_daily_exit_nb_uniq_visitors:"194",
                avg_bandwidth:"0",
                avg_time_on_page:"34",
                bounce_rate:"34%",
                exit_rate:"11%",
                avg_time_generation:"0.821"
            },
            {
                date: "2017-09",
                status: "favorite",
                label:" BebasBayar | Menu Favorit",
                nb_visits:"1920",
                nb_hits:"2492",
                sum_time_spent:"91991",
                nb_hits_with_time_generation:"1719",
                min_time_generation:"0.002",
                max_time_generation:"20.357",
                sum_bandwidth:"0",
                nb_hits_with_bandwidth:"0",
                min_bandwidth:null,
                max_bandwidth:null,
                entry_nb_visits:"301",
                entry_nb_actions:"989",
                entry_sum_visit_length:"93807",
                entry_bounce_count:"126",
                exit_nb_visits:"265",
                sum_daily_nb_uniq_visitors:"1635",
                sum_daily_entry_nb_uniq_visitors:"226",
                sum_daily_exit_nb_uniq_visitors:"226",
                avg_bandwidth:"0",
                avg_time_on_page:"37",
                bounce_rate:"42%",
                exit_rate:"14%",
                avg_time_generation:"0.763"
            },
            {
                date: "2018-01",
                status: "favorite",
                label:" BebasBayar | Menu Favorit",
                nb_visits:"1730",
                nb_hits:"2212",
                sum_time_spent:"76546",
                nb_hits_with_time_generation:"1532",
                min_time_generation:"0.001",
                max_time_generation:"171.991",
                sum_bandwidth:"0",
                nb_hits_with_bandwidth:"0",
                min_bandwidth:null,
                max_bandwidth:null,
                entry_nb_visits:"245",
                entry_nb_actions:"754",
                entry_sum_visit_length:"60299",
                entry_bounce_count:"74",
                exit_nb_visits:"211",
                sum_daily_nb_uniq_visitors:"1481",
                sum_daily_entry_nb_uniq_visitors:"197",
                sum_daily_exit_nb_uniq_visitors:"197",
                avg_bandwidth:"0",
                avg_time_on_page:"35",
                bounce_rate:"30%",
                exit_rate:"12%",
                avg_time_generation:"1.007"
            },
            {
                date: "2017-02",
                status: "favorite",
                label:" BebasBayar | Menu Favorit",
                nb_visits:"1688",
                nb_hits:"2274",
                sum_time_spent:"99468",
                nb_hits_with_time_generation:"1599",
                min_time_generation:"0.001",
                max_time_generation:"16.443",
                sum_bandwidth:"0",
                nb_hits_with_bandwidth:"0",
                min_bandwidth:null,
                max_bandwidth:null,
                entry_nb_visits:"242",
                entry_nb_actions:"709",
                entry_sum_visit_length:"63031",
                entry_bounce_count:"70",
                exit_nb_visits:"191",
                sum_daily_nb_uniq_visitors:"1429",
                sum_daily_entry_nb_uniq_visitors:"184",
                sum_daily_exit_nb_uniq_visitors:"157",
                avg_bandwidth:"0",
                avg_time_on_page:"44",
                bounce_rate:"29%",
                exit_rate:"11%",
                avg_time_generation:"1.122"
            },
            {
                date: "2017-03",
                status: "favorite",
                label:" BebasBayar | Menu Favorit",
                nb_visits:"1485",
                nb_hits:"1903",
                sum_time_spent:"73092",
                nb_hits_with_time_generation:"1327",
                min_time_generation:"0.002",
                max_time_generation:"46.218",
                sum_bandwidth:"0",
                nb_hits_with_bandwidth:"0",
                min_bandwidth:null,
                max_bandwidth:null,
                entry_nb_visits:"195",
                entry_nb_actions:"622",
                entry_sum_visit_length:"46344",
                entry_bounce_count:"55",
                exit_nb_visits:"152",
                sum_daily_nb_uniq_visitors:"1310",
                sum_daily_entry_nb_uniq_visitors:"166",
                sum_daily_exit_nb_uniq_visitors:"138",
                avg_bandwidth:"0",
                avg_time_on_page:"38",
                bounce_rate:"28%",
                exit_rate:"10%",
                avg_time_generation:"0.822"
            },
            {
                date: "2017-05",
                status: "favorite",
                label:" BebasBayar | Menu Favorit",
                nb_visits:"1130",
                nb_hits:"1434",
                sum_time_spent:"48411",
                nb_hits_with_time_generation:"992",
                min_time_generation:"0.001",
                max_time_generation:"44.479",
                sum_bandwidth:"0",
                nb_hits_with_bandwidth:"0",
                min_bandwidth:null,
                max_bandwidth:null,
                entry_nb_visits:"143",
                entry_nb_actions:"410",
                entry_sum_visit_length:"34189",
                entry_bounce_count:"36",
                exit_nb_visits:"106",
                sum_daily_nb_uniq_visitors:"1008",
                sum_daily_entry_nb_uniq_visitors:"125",
                sum_daily_exit_nb_uniq_visitors:"100",
                avg_bandwidth:"0",
                avg_time_on_page:"34",
                bounce_rate:"25%",
                exit_rate:"9%",
                avg_time_generation:"0.628"
            }
        ]
        setData(arrayData)

        //inisiasasi state modalStudent
        
    }, [])

    return(
        <div className="col-lg-12">
            <div className="card-header bg-warning">
                <h3>Data</h3>
            </div>

            <div className="card-body">
                {data.map(item => (
                    <DataList
                    key={`key-${item.nb_visits}`}
                    date = {item.date}
                    label = {item.label}
                    nb_visits = {item.nb_visits}
                    status = {item.status}

                    
                    nb_hits={item.nb_hits}
                    sum_time_spent={item.sum_time_spent}
                    nb_hits_with_time_generation={item.nb_hits_with_time_generation}
                    min_time_generation={item.min_time_generation}
                    max_time_generation={item.max_time_generation}
                    sum_bandwidth={item.sum_bandwidth}
                    nb_hits_with_bandwidth={item.nb_hits_with_bandwidth}
                    min_bandwidth={item.min_bandwidth}
                    max_bandwidth={item.max_bandwidth}
                    entry_nb_visits={item.entry_nb_visits}
                    entry_nb_actions={item.entry_nb_actions}
                    entry_sum_visit_length={item.entry_sum_visit_length}
                    entry_bounce_count={item.entry_bounce_count}
                    exit_nb_visits={item.exit_nb_visits}
                    sum_daily_nb_uniq_visitors={item.sum_daily_nb_uniq_visitors}
                    sum_daily_entry_nb_uniq_visitors={item.sum_daily_entry_nb_uniq_visitors}
                    sum_daily_exit_nb_uniq_visitors={item.sum_daily_exit_nb_uniq_visitors}
                    avg_bandwidth={item.avg_bandwidth}
                    avg_time_on_page={item.avg_time_on_page}
                    bounce_rate={item.bounce_rate}
                    exit_rate={item.bounce_rate}
                    avg_time_generation={item.avg_time_generation}
                    ></DataList>
                ))}
                
                * modal component
             <div className="modal" id="static">
                        <div className="modal-dialog modal-dialog-scrollable">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h4 className="modal-title">Full Data</h4>
                                </div>
                                <div className="modal-body">
                                    <p>date = {item.date}</p>
                                    <p>label = {item.label}</p>
                                    <p>nb_visits = {item.nb_visits}</p>
                                    <p>status = {item.status}</p>
                                    <p>nb_hits={item.nb_hits}</p>
                                    <p>sum_time_spent={item.sum_time_spent}</p>
                                    <p>nb_hits_with_time_generation={item.nb_hits_with_time_generation}</p>
                                    <p>min_time_generation={item.min_time_generation}</p>
                                    <p>max_time_generation={item.max_time_generation}</p>
                                    <p>sum_bandwidth={item.sum_bandwidth}</p>
                                    <p>nb_hits_with_bandwidth={item.nb_hits_with_bandwidth}</p>
                                    <p>min_bandwidth={item.min_bandwidth}</p>
                                    <p>max_bandwidth={item.max_bandwidth}</p>
                                    <p>entry_nb_visits={item.entry_nb_visits}</p>
                                    <p>entry_nb_actions={item.entry_nb_actions}</p>
                                    <p>entry_sum_visit_length={item.entry_sum_visit_length}</p>
                                    <p>entry_bounce_count={item.entry_bounce_count}</p>
                                    <p>exit_nb_visits={item.exit_nb_visits}</p>
                                    <p>sum_daily_nb_uniq_visitors={item.sum_daily_nb_uniq_visitors}</p>
                                    <p>sum_daily_entry_nb_uniq_visitors={item.sum_daily_entry_nb_uniq_visitors}</p>
                                    <p>sum_daily_exit_nb_uniq_visitors={item.sum_daily_exit_nb_uniq_visitors}</p>
                                    <p>avg_bandwidth={item.avg_bandwidth}</p>
                                    <p>avg_time_on_page={item.avg_time_on_page}</p>
                                    <p>bounce_rate={item.bounce_rate}</p>
                                    <p>exit_rate={item.bounce_rate}</p>
                                    <p>avg_time_generation={item.avg_time_generation}</p>
                                </div>
                            </div>
                        </div>
                    </div> 
            </div>
        </div>
    )
}
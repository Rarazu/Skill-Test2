import { Modal } from "bootstrap"
export default function DataList(props){
    return(
        <div className="m-2 p-2">
            <div className="row">
                <div className="col-lg-3 p-2">
                    <div className="p-2" style={{border: `1px solid gray`}}>
                        <small>Date</small>
                         <h6>{props.date}</h6>
                    </div> 
                </div>
                <div className="col-lg-3 p-2">
                    <div className="bg-info p-2" style={{border: `1px solid gray`}}>
                        <small>Label</small>
                        <h6>{props.label}</h6>
                    </div>
                </div>
                <div className="col-lg-3 p-2">
                    <div className="p-2 bg-success text-white" style={{border: `1px solid gray`}}>
                        <small>Nb_Vinits</small>
                        <h6>{props.nb_visits}</h6>
                    </div>
                </div>
                <div className="col-lg-3 p-2">
                    <div className="p-2 bg-danger text-white" style={{border: `1px solid gray`}}>
                        <small>Status</small>
                        <h6>{props.status}</h6>
                    </div>
                </div>

                <button className="btn btn-warning col-lg-12" data-bs-togle="modal" data-bs-target="#static">
                    Show Data
                </button>

                {/** modal component */}
             <div className="modal" id="static">
                        <div className="modal-dialog modal-dialog-scrollable">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h4 className="modal-title">Full Data</h4>
                                </div>
                                <div className="modal-body">
                                    <p>date = {props.date}</p>
                                    <p>label = {props.label}</p>
                                    <p>nb_visits = {props.nb_visits}</p>
                                    <p>status = {props.status}</p>
                                    <p>nb_hits={props.nb_hits}</p>
                                    <p>sum_time_spent={props.sum_time_spent}</p>
                                    <p>nb_hits_with_time_generation={props.nb_hits_with_time_generation}</p>
                                    <p>min_time_generation={props.min_time_generation}</p>
                                    <p>max_time_generation={props.max_time_generation}</p>
                                    <p>sum_bandwidth={props.sum_bandwidth}</p>
                                    <p>nb_hits_with_bandwidth={props.nb_hits_with_bandwidth}</p>
                                    <p>min_bandwidth={props.min_bandwidth}</p>
                                    <p>max_bandwidth={props.max_bandwidth}</p>
                                    <p>entry_nb_visits={props.entry_nb_visits}</p>
                                    <p>entry_nb_actions={props.entry_nb_actions}</p>
                                    <p>entry_sum_visit_length={props.entry_sum_visit_length}</p>
                                    <p>entry_bounce_count={props.entry_bounce_count}</p>
                                    <p>exit_nb_visits={props.exit_nb_visits}</p>
                                    <p>sum_daily_nb_uniq_visitors={props.sum_daily_nb_uniq_visitors}</p>
                                    <p>sum_daily_entry_nb_uniq_visitors={props.sum_daily_entry_nb_uniq_visitors}</p>
                                    <p>sum_daily_exit_nb_uniq_visitors={props.sum_daily_exit_nb_uniq_visitors}</p>
                                    <p>avg_bandwidth={props.avg_bandwidth}</p>
                                    <p>avg_time_on_page={props.avg_time_on_page}</p>
                                    <p>bounce_rate={props.bounce_rate}</p>
                                    <p>exit_rate={props.bounce_rate}</p>
                                    <p>avg_time_generation={props.avg_time_generation}</p>
                                </div>
                            </div>
                        </div>
                    </div> {/** end of modal */}
            </div>
        </div>
    )
}
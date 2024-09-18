import TicketForm from "./TicketForm"
import TicketItem from "./TicketItem"

export default function TicketList({tickets, dispatch}:any){
    return(
        <div className="ticket-list">
            {tickets.map((ticket:any) => (
                <TicketItem key={tickets.id} dispatch={dispatch} ticket={ticket}></TicketItem>
            ))}
        </div>
    )
}
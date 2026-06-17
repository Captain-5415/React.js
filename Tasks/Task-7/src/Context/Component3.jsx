import { useContext } from 'react'
import { Pass } from '../App'

export default function Component3() {
    const { submittedData } = useContext(Pass)
    return (
        <div className="c3">
            <h2>Employee Details</h2>

            <p><strong>Name:</strong> {submittedData.name}</p>
            <p><strong>Email:</strong> {submittedData.email}</p>
            <p><strong>Phone:</strong> {submittedData.phone}</p>
            <p><strong>Address:</strong> {submittedData.address}</p>
            <p><strong>City:</strong> {submittedData.city}</p>
        </div>
    )
}

import {toast} from "react-toastify";

import {AxiosError} from "axios";

interface ErrorResponseData {
    message?: string;    // If there's a single message
    messages?: string[]; // If there are multiple messages (as an array)
}

function ErrorHandler(error: AxiosError<ErrorResponseData>) {
    if (error) {
        let message: string = "";
        if (error.response) {
            if (error.response.status === 500) {
                message = "Something went wrong. Please try again later.";
            } else if (error.response.data?.message) {
                message = error.response.data.message;
            } else if (error.response.data?.messages) {
                message = error.response.data.messages.join(', '); // Handle array of messages
            }
            toast.error(message);

            return Promise.reject(error);
        }
    }
}

export default ErrorHandler;
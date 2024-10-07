import { ApiResponse } from "./types";

export * from "./types";

export const DEFAULT_HEADERS = {
	"Content-Type": "application/json",
};

export async function handleResponse<T>(
	response: Response
): Promise<ApiResponse<T>> {
	if (!response.ok) {
		const errorData = await response.json();
		throw new Error(errorData.message || "An error occurred");
	}
	const data = await response.json();
	return {
		data,
		status: response.status,
		message: "Success",
	};
}

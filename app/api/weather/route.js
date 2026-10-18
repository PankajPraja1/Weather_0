
export async function GET(request) {
    const { searchParams } = new URL(request.url);
    const city = searchParams.get("city");

    if (!city?.trim()) {
        return Response.json(
            { error: "Please enter a city name." },
            { status: 400 }
        );
    }

    const apiKey = process.env.OPENWEATHER_API_KEY;

    if (!apiKey) {
        return Response.json(
            { error: "Weather API key is not configured." },
            { status: 500 }
        );
    }

    const url = new URL(
        "https://api.openweathermap.org/data/2.5/weather"
    );

    url.searchParams.set("q", city.trim());
    url.searchParams.set("appid", apiKey);
    url.searchParams.set("units", "metric");

    try {
        const response = await fetch(url);

        const data = await response.json();

        if (!response.ok) {
            return Response.json(
                {
                    error: response.status === 404
                        ? "City not found. Please try another city."
                        : data.message || "Unable to fetch weather."
                },
                { status: response.status }
            );
        }

        return Response.json(data);
    } catch {
        return Response.json(
            { error: "Unable to connect to the weather service." },
            { status: 502 }
        );
    }
}

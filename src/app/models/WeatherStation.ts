export class WeatherStation {
    public id: number
    public name: string
    public address: string
    public description: string
    public date_day: number
    public date_month: number
    public date_year: number
    public date_hours: number
    public date_minutes: number
    public temperature: number
    public humidity: number
    public rainning_pulses: number
    public time_without_rainning: number
    public wind_direction: number
    public speed: number
    public created_at: Date
    public updated_at: Date

    constructor(id) {
        this.id = id
    }

}
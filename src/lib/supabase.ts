export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      Customers: {
        Row: {
          address: string | null
          customer_id: number
          email: string | null
          first_name: string | null
          last_name: string | null
          phone_number: number | null
        }
        Insert: {
          address?: string | null
          customer_id?: number
          email?: string | null
          first_name?: string | null
          last_name?: string | null
          phone_number?: number | null
        }
        Update: {
          address?: string | null
          customer_id?: number
          email?: string | null
          first_name?: string | null
          last_name?: string | null
          phone_number?: number | null
        }
        Relationships: []
      }
      Reservation: {
        Row: {
          cancel_flag: boolean | null
          customer_id: number | null
          end_date: string | null
          price: number | null
          reservation_id: string
          start_date: string | null
          vehicle_id: number | null
        }
        Insert: {
          cancel_flag?: boolean | null
          customer_id?: number | null
          end_date?: string | null
          price?: number | null
          reservation_id?: string
          start_date?: string | null
          vehicle_id?: number | null
        }
        Update: {
          cancel_flag?: boolean | null
          customer_id?: number | null
          end_date?: string | null
          price?: number | null
          reservation_id?: string
          start_date?: string | null
          vehicle_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "Reservation_customer_id_fkey"
            columns: ["customer_id"]
            isOneToOne: false
            referencedRelation: "Customers"
            referencedColumns: ["customer_id"]
          },
          {
            foreignKeyName: "Reservation_vehicle_id_fkey"
            columns: ["vehicle_id"]
            isOneToOne: false
            referencedRelation: "Vehicles"
            referencedColumns: ["vehicle_id"]
          }
        ]
      }
      Sales: {
        Row: {
          amount: number | null
          customer_id: number | null
          sale_date: string | null
          sale_id: string
          vehicle_id: number | null
        }
        Insert: {
          amount?: number | null
          customer_id?: number | null
          sale_date?: string | null
          sale_id: string
          vehicle_id?: number | null
        }
        Update: {
          amount?: number | null
          customer_id?: number | null
          sale_date?: string | null
          sale_id?: string
          vehicle_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "Sales_customer_id_fkey"
            columns: ["customer_id"]
            isOneToOne: false
            referencedRelation: "Customers"
            referencedColumns: ["customer_id"]
          },
          {
            foreignKeyName: "Sales_vehicle_id_fkey"
            columns: ["vehicle_id"]
            isOneToOne: false
            referencedRelation: "Vehicles"
            referencedColumns: ["vehicle_id"]
          }
        ]
      }
      Vehicles: {
        Row: {
          make: string | null
          model: string | null
          price: number | null
          status: string | null
          vehicle_id: number
        }
        Insert: {
          make?: string | null
          model?: string | null
          price?: number | null
          status?: string | null
          vehicle_id?: number
        }
        Update: {
          make?: string | null
          model?: string | null
          price?: number | null
          status?: string | null
          vehicle_id?: number
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

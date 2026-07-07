const { MongoClient } = require('mongodb');
const dns = require('dns');
dns.setDefaultResultOrder('ipv4first');

const MONGODB_URI = "mongodb://yt:MNuNg1eKCoTi9cau@cluster0-shard-00-00.kgw4w.mongodb.net:27017,cluster0-shard-00-01.kgw4w.mongodb.net:27017,cluster0-shard-00-02.kgw4w.mongodb.net:27017/car-doctor?ssl=true&authSource=admin&retryWrites=true&w=majority&appName=Cluster0";

async function seed() {
  const client = new MongoClient(MONGODB_URI);

  try {
    console.log("Connecting to MongoDB Atlas...");
    await client.connect();
    console.log("Successfully connected to MongoDB.");

    const db = client.db("car-doctor");
    const servicesCollection = db.collection("services");

    console.log("Cleaning up existing Services...");
    await servicesCollection.deleteMany({});
    console.log("Services collection cleared.");

    console.log("Seeding services data...");
    await servicesCollection.insertMany([
      {
        title: "Engine Diagnostics & Tune-up",
        img: "https://images.unsplash.com/photo-1486006920555-c77dce18193b?q=80&w=600&auto=format&fit=crop",
        price: 150,
        description: "Comprehensive computerized engine scanning, error code analysis, spark plug replacement, and sensor check to optimize performance and restore fuel efficiency.",
        facility: [
          { name: "Computerized Scanning", details: "Diagnostic scan utilizing state-of-the-art OBD-II scanning tools." },
          { name: "Spark Plug Swap", details: "Replacing old spark plugs to improve combustion efficiency." },
          { name: "Sensor Calibration", details: "Calibration and inspection of airflow and oxygen sensors." },
          { name: "Performance Report", details: "A complete visual and digital report of all diagnostics." }
        ]
      },
      {
        title: "Brake System Repair",
        img: "https://images.unsplash.com/photo-1486006920555-c77dce18193b?q=80&w=600&auto=format&fit=crop",
        price: 200,
        description: "Professional replacement of worn brake pads, brake fluid flush, rotor resurfacing, and complete system inspection to guarantee maximum stopping power.",
        facility: [
          { name: "Premium Pad Replacement", details: "Installing high-grade ceramic or metallic brake pads." },
          { name: "Rotor Resurfacing", details: "Resurfacing or replacing brake rotors for smooth stopping." },
          { name: "Brake Fluid Flush", details: "Complete drainage and replenishment of brake hydraulic fluid." },
          { name: "Caliper Lubrication", details: "Cleaning and lubricating slide pins for smooth operation." }
        ]
      },
      {
        title: "Tire Balancing & Alignment",
        img: "https://images.unsplash.com/photo-1578844251758-2f71da64c96f?q=80&w=600&auto=format&fit=crop",
        price: 80,
        description: "Four-wheel laser alignment and computer-aided tire balancing to prevent uneven wear, ensure straight tracking, and extend tire lifespan.",
        facility: [
          { name: "Laser Wheel Alignment", details: "Precision alignment of camber, caster, and toe angles." },
          { name: "Computerized Balancing", details: "Balancing tires to eliminate high-speed vibrations." },
          { name: "Tire Rotation", details: "Rotating tires to promote even tread wear patterns." },
          { name: "Suspension Check", details: "Inspection of struts, shocks, and steering linkages." }
        ]
      },
      {
        title: "AC Servicing & Refrigerant Refill",
        img: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?q=80&w=600&auto=format&fit=crop",
        price: 120,
        description: "Full air conditioning system check, pressure testing for leaks, cabin air filter replacement, and recharging with premium R134a or newer refrigerant.",
        facility: [
          { name: "Pressure & Leak Test", details: "Vacuum testing the AC loop to locate any active leaks." },
          { name: "Refrigerant Recharge", details: "Recharging system with precise manufacturer-specified weight." },
          { name: "Cabin Filter Swap", details: "Replacing cabin filter for clean, odor-free airflow." },
          { name: "Compressor Audit", details: "Testing AC compressor clutch and electrical relays." }
        ]
      },
      {
        title: "Engine Oil & Filter Service",
        img: "https://images.unsplash.com/photo-1552656967-7a0991a13906?q=80&w=600&auto=format&fit=crop",
        price: 55,
        description: "Premium synthetic engine oil replacement, high-performance oil filter swap, fluid level top-up, and multi-point vehicle safety check.",
        facility: [
          { name: "Synthetic Oil Swap", details: "Up to 5 quarts of premium full-synthetic motor oil." },
          { name: "OEM Filter Swap", details: "Installing high-efficiency oil filter for cleaner operation." },
          { name: "Fluid Top-off", details: "Replenishing coolant, windshield wash, and power steering fluids." },
          { name: "Chassis Inspection", details: "Under-car inspection for leaks or loose components." }
        ]
      },
      {
        title: "Transmission Fluid Exchange",
        img: "https://images.unsplash.com/photo-1507136566006-cfc505b114fc?q=80&w=600&auto=format&fit=crop",
        price: 180,
        description: "Draining old transmission fluid, replacing the transmission pan gasket and filter, and refilling with high-grade automatic or manual transmission fluid.",
        facility: [
          { name: "Fluid Drainage", details: "Complete evacuation of degraded automatic transmission fluid." },
          { name: "Filter Replacement", details: "Installing a fresh internal transmission fluid filter." },
          { name: "Gasket Seal Swap", details: "Replacing transmission pan gasket to prevent leaks." },
          { name: "Road Test Validation", details: "Post-service test drive to confirm smooth gear shifting." }
        ]
      }
    ]);

    console.log("Database seeded successfully with Car Doctor services!");
  } catch (error) {
    console.error("Seeding error:", error);
  } finally {
    await client.close();
    process.exit(0);
  }
}

seed();

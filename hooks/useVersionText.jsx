import useVersion, { ELECTRIC_VARIANT, PLUMBER_VARIANT } from "./useVersion";

const text = {
  electric: {
    header_h: "PROFESSIONAL ELECTRICIANS IN UTAH",
    header_p:
      "We understand that electrical issues can be stressful, time-consuming, and costly. That's why we've created a service dedicated to connecting you with the best electricians in state, making your life easier. Don't let electrical problems dampen your day.",
    expert_h: "Expert Utah electrical Service, Installation and Repair",
    expert_p:
      "Your safety is our top priority. We follow strict safety protocols and adhere to industry standards to provide you with peace of mind. You can trust us to handle all your electrical needs with professionalism and precision.",
    service_install_h: "Electrical Installations",
    service_install_p:
      "Our electricians are responsible for installing various electrical components, such as wiring, switches, outlets, circuit breakers, and lighting fixtures. They also can involve installing additional electrical outlets, upgrading circuit breakers or fuse boxes, or rewiring to support new appliances or technology. You may be ensured that these installations comply with local electrical codes and safety standards. ",
    service_repair_h: "Electrical Repairs & Replacement",
    service_repair_p:
      "We diagnose problems, such as power outages, faulty wiring, malfunctioning outlets, or circuit breaker trips, and implement appropriate solutions to restore electrical functionality. Our electricians adhere to safety protocols and electrical codes to mitigate potential hazards and ensure electrical systems meet regulatory requirements. They use specialized tools and equipment to perform their work safely, following proper grounding and insulation practices.",
    footer_p:
      "Our company specializes in quick home assistance with electrical repairs and more.",
  },
  plumber: {
    header_h: "PROFESSIONAL PLUMBERS IN UTAH",
    header_p:
      "We understand that plumbing issues can be stressful, time-consuming, and costly. That's why we've created a service dedicated to connecting you with the best plumbers in state, making your life easier. Don't let plumbing problems dampen your day.",
    expert_h: "Expert Utah Plumbing Service, Installation and Repair",
    expert_p:
      "Are you tired of dealing with a drippy faucet, clogged drains, or outdated water filters? Our skilled plumbers are well-versed in maintaining and servicing all types of plumbing systems. Whether you have a new, old, or even really old setup, we have the expertise to handle them all. You may trust that your plumbing is in capable hands.",
    service_install_h: "Plumbing Installations",
    service_install_p:
      "Our plumbers are responsible for installing various plumbing components, such as pipes, faucets, toilets, sinks, showers, bathtubs, water heaters, and drainage systems. They are also skilled in cutting, bending, and joining pipes to create proper plumbing configurations and using techniques such as soldering, welding, or threading to connect pipes and fittings securely and efficiently.",
    service_repair_h: "Plumbing Repairs & replacement",
    service_repair_p:
      "We diagnose and repair all plumbing issues, such as fixing leaks, unclogging drains, repairing or replacing damaged pipes, valves, or faucets, and addressing problems with water pressure or temperature. Our plumbers use various tools and techniques to identify and resolve plumbing malfunctions.",
    footer_p:
      "Our service specializes in quick home assistance with plumbing repairs.",
  },
};

export default function useVersionText() {
  const variant = useVersion();
  if (variant === ELECTRIC_VARIANT) {
    return text.electric;
  } else if (variant === PLUMBER_VARIANT) {
    return text.plumber;
  }
}
